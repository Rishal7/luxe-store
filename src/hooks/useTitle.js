import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Luxe Store`;
  }, [title]);

  return null;
};
