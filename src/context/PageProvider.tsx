import { useState, useMemo, ReactNode, useEffect } from "react";
import { PageContext } from "./context";
import { useParams } from "react-router-dom";
import { componentDetail, coursesMokckData } from "../data/mockData";

interface Props {
  children: ReactNode;
}

export function PageProvider({ children }: Props) {
  const [headerInfo, setHeaderInfo] = useState({
    title: "Course",
    subTitle: "",
    pageTitle: "",
    imageSource: "",
  });
  const { courseId } = useParams<{ courseId: string }>();

  // Memoize the value
  const memoizedValue = useMemo(
    () => ({
      headerInfo,
      detailsPageData: componentDetail,
      mainPageData: coursesMokckData,
    }),
    [headerInfo]
  );

  useEffect(() => {
    if (courseId) {
      setHeaderInfo((prev) => ({
        ...prev,
        title: componentDetail.name,
        subTitle: componentDetail.startDate,
        imageSource: componentDetail.image,
        pageTitle: "Description",
      }));
    } else {
      setHeaderInfo((prev) => ({
        ...prev,
        title: "Learning status",
        subTitle: "Main page",
        imageSource: "",
        pageTitle: "Current",
      }));
    }
  }, [courseId]);

  return (
    <PageContext.Provider value={memoizedValue}>
      {children}
    </PageContext.Provider>
  );
}
