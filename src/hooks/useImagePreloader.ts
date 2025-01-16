import { useState, useEffect } from 'react';

export const useImagePreloader = (urls: (string | undefined)[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const validUrls = urls.filter((url): url is string => !!url);
    if (validUrls.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const images = validUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === validUrls.length) {
        setLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleLoad); // Count errors as loaded to prevent blocking
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      });
    };
  }, [urls]);

  return loaded;
};