import React, { useContext } from "react";
import {
  CourseDataType,
  headerInfo,
  CourseItemDataType,
  PageDetailsDataType,
} from "types.ts/types";

const contentsDefaultData: CourseItemDataType = {
  id: 0,
  name: "",
  subtitle: "",
  type: "",
  image: "",
  endDate: "",
  progress: 0,
};

const defaultDetailsPageData: PageDetailsDataType = {
  name: "",
  description_data: [{ name: "", content: "" }],
  language: "",
  startDate: "",
  endDate: "",
  learningForm: "",
  image: "",
};

const defaultMainPageData: CourseDataType = {
  contents: [contentsDefaultData],
  count: 0,
};
export const PageContext = React.createContext<{
  headerInfo: headerInfo;
  mainPageData: CourseDataType;
  detailsPageData: PageDetailsDataType;
}>({
  headerInfo: {
    title: "",
    subTitle: "",
    pageTitle: "",
    imageSource: "",
  },
  mainPageData: defaultMainPageData,
  detailsPageData: defaultDetailsPageData,
});

export const usePage = () => {
  return useContext(PageContext);
};
