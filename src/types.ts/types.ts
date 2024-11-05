export interface CourseItemDataType {
  id: number;
  name: string;
  subtitle: string;
  type: string; // Need to introduce constant file "LEARNING_PATH" | "COURSE" | "MEDIA_ITEM";
  image: string;
  endDate?: string;
  progress: number;
}

export interface CourseDataType {
  contents?: CourseItemDataType[];
  count: number;
}

export interface PageDetailsDataType {
  name: string;
  description_data: { name: string; content: string }[];
  language: string;
  startDate: string;
  endDate: string;
  learningForm: string;
  image: string;
}

export interface headerInfo {
  title: string;
  subTitle?: string;
  pageTitle?: string;
  imageSource?: string;
}
