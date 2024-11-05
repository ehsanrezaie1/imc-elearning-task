import React, { useContext } from "react";
import {
  CourseDataType,
  headerInfo,
  CourseItemDataType,
  PageDetailsDataType,
} from "types.ts/types";

// Default value for Each items
const contentsDefaultData: CourseItemDataType = {
  id: 0,
  name: "",
  subtitle: "",
  type: "",
  image: "",
  endDate: "",
  progress: 0,
};

// Default value for Page details
const defaultDetailsPageData: PageDetailsDataType = {
  name: "",
  description_data: [{ name: "", content: "" }],
  language: "",
  startDate: "",
  endDate: "",
  learningForm: "",
  image: "",
};

// Default value for main page
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
