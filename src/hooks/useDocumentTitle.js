import { useEffect } from "react";

const SITE = "Johndel L. Sialongo";

/** Sets <title> and the meta description for the current page. */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Portfolio`;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}
