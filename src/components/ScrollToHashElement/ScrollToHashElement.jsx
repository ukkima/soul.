import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
      }
    }
  }, [hash]);

  return null;
};
