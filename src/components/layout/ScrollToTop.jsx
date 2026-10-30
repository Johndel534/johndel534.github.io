import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on navigation, as a full page load did on the original site. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
