import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLE_BASE = "Georgia Red Snapper Program";

const ROUTE_TITLES = {
  "/": "Home",
  "/about": "About",
  "/how-it-works": "How It Works",
  "/faq": "FAQs",
  "/season-info": "Season Info",
  "/contact": "Contact",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = ROUTE_TITLES[pathname];
    document.title = page ? `${TITLE_BASE}: ${page}` : TITLE_BASE;
  }, [pathname]);

  return null;
}
