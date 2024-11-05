import { useState, useMemo, ReactNode, useEffect } from "react";
import { PageContext } from "./context";
import { useParams } from "react-router-dom";
import { componentDetail, coursesMokckData } from "../data/mockData";

interface Props {
  children: ReactNode;
}
// In this context provider we are getting data and praparing the header info
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

  // Assign the header info based on the main page or details page
  const headerInfoDetails = useMemo(() => {
    if (courseId) {
      return {
        title: componentDetail.name,
        subTitle: componentDetail.startDate,
        imageSource: componentDetail.image,
        pageTitle: "Description",
      };
    } else {
      return {
        title: "Learning status",
        subTitle: "Main page",
        imageSource: "",
        pageTitle: "Current",
      };
    }
  }, [courseId]);

  // In this useEffect we can call the endpoint but for now we are getting mock data
  useEffect(() => {
    setHeaderInfo((prev) => ({ ...prev, ...headerInfoDetails }));
  }, [headerInfoDetails]);

  return (
    <PageContext.Provider value={memoizedValue}>
      {children}
    </PageContext.Provider>
  );
}
