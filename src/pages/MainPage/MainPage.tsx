import { CourseItem } from "pages/MainPage/components/CourseItem/CourseItem";
import { EmptyState } from "components/EmptyState";
import { SearchBar } from "components/SearchBar";
import { Skeleton } from "components/Skeleton";
import { useSearch } from "hooks";

export const MainPage = () => {
  const {
    isLoading,
    data,
    searchQuery,
    setSearchQuery,
    inputRef,
    onClearSearch,
    onSearch,
  } = useSearch();

  return (
    <div className="flex flex-col gap-3 w-full">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
        ref={inputRef}
      />
      {/** Count */}
      <div>{data.count} Results</div>
      <div className="flex flex-col gap-4">
        {isLoading && data.contents ? (
          <Skeleton />
        ) : data.contents && data.contents?.length > 0 ? (
          data.contents &&
          data.contents.map((item) => {
            return (
              <CourseItem
                key={item.id}
                courseId={item.id}
                title={item.name}
                subtitle={item.subtitle}
                imgSource={item.image}
                type={item.type}
                endDate={item.endDate}
                progress={item.progress}
              />
            );
          })
        ) : (
          <EmptyState onClearSearch={onClearSearch} />
        )}
      </div>
    </div>
  );
};
