import { useState, useEffect } from "react";
import parseQA from "../utils/parseQA.js";

const FAQ_URL = import.meta.env.DEV
  ? "/qa.txt"
  : "https://coastalgadnr.org/sites/default/files/crd/AppRedSnapper/qa.txt";

// Module-level cache — survives across mounts (route changes) but
// not across full page reloads, so the latest file is always picked up.
let _cache = null;

/**
 * Fetch, parse, and cache the remote FAQ data.
 * @returns {{ faqs: { q: string, a: string }[], loading: boolean, error: string | null }}
 */
export default function useFAQs() {
  const [faqs, setFaqs] = useState(_cache || []);
  const [loading, setLoading] = useState(!_cache);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (_cache) return; // already fetched this session

    let cancelled = false;

    fetch(FAQ_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load FAQs (HTTP ${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        const parsed = parseQA(text);
        if (parsed.length === 0) throw new Error("FAQ file was empty or had no valid Q/A pairs");
        _cache = parsed;
        setFaqs(parsed);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { faqs, loading, error };
}
