import { useCallback, useRef, useState } from "react";
import { CourseDataType } from "types.ts/types";
import { usePage } from "context";

// Custome hook to handle search, assign search query, and clear the input.
export const useSearch = () => {
  const { mainPageData } = usePage();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<CourseDataType>(mainPageData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    setData(mainPageData);
    inputRef.current?.focus();
  }, [mainPageData]);

  const handleSearch = useCallback(
    (keyword: string) => {
      setIsLoading(true);
      const lowercasedKeyword = keyword.toLowerCase();
      setSearchQuery(keyword);

      // added some timeoute to simulate loading state
      setTimeout(() => {
        const filteredContentData = mainPageData.contents?.filter(
          (item) =>
            item.name.toLowerCase().includes(lowercasedKeyword) ||
            item.subtitle.toLowerCase().includes(lowercasedKeyword)
        );

        setData({
          contents: filteredContentData,
          count: filteredContentData ? filteredContentData.length : 0,
        });

        setIsLoading(false);
      }, 900);
    },
    [mainPageData.contents]
  );

  return {
    onSearch: handleSearch,
    isLoading,
    searchQuery,
    setSearchQuery,
    inputRef,
    onClearSearch: handleClearSearch,
    data,
  };
};
