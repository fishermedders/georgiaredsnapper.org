/**
 * parseQA.js — Parse the Q&A text-file format used by qa.txt.
 *
 * Format:
 *   # comment
 *   Q: question text
 *   F: url-fragment   (optional, used as the HTML id / permalink anchor)
 *   A: answer text
 *
 * Blank lines and comments are ignored. F: may appear anywhere between
 * Q: and A:. A question/answer pair is formed when a Q: line is
 * eventually followed by an A: line.
 *
 * @param {string} text  Raw file contents.
 * @returns {{ q: string, a: string, fragment: string | null }[]}
 */
export default function parseQA(text) {
  const faqs = [];
  let currentQ = null;
  let currentF = null;

  for (const raw of text.split("\n")) {
    const line = raw.trim();

    // Skip blank lines and comments
    if (!line || line.startsWith("#")) continue;

    if (line.startsWith("Q:")) {
      currentQ = line.slice(2).trim();
      currentF = null; // reset fragment for each new question
    } else if (line.startsWith("F:") && currentQ !== null) {
      currentF = line.slice(2).trim();
    } else if (line.startsWith("A:") && currentQ !== null) {
      faqs.push({ q: currentQ, a: line.slice(2).trim(), fragment: currentF });
      currentQ = null;
      currentF = null;
    }
  }

  return faqs;
}
