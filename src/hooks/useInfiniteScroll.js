import { useState, useEffect } from 'react';

const useInfiniteScroll = () => {
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setIsFetchingMore(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, []);

  return [isFetchingMore, setIsFetchingMore];
};

export default useInfiniteScroll;
