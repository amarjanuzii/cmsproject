import { useState, useEffect } from "react";
import storage from "../utils/storage";
import contentData from "../data/content.json";

function useContent() {
  const [content, setContent] = useState(() => {
    const cachedContent = storage.get("siteContent");
    if (cachedContent) {
      console.log("Using cached content from localStorage");
      return cachedContent;
    }
    console.log("Using default content");
    storage.set("siteContent", contentData);
    return contentData;
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!content) {
        setContent(contentData);
        storage.set("siteContent", contentData);
      }
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [content]);

  const refreshContent = () => {
    setLoading(true);
    setTimeout(() => {
      setContent(contentData);
      storage.set("siteContent", contentData);
      setLoading(false);
      console.log("Content refreshed");
    }, 1000);
  };

  return {
    content,
    loading,
    error,
    refreshContent,
  };
}

export default useContent;
