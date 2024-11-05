import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  courseId: number;
  title?: string;
  subtitle?: string;
  imgSource?: string;
  endDate?: string;
  type?: string;
  progress?: number;
}

export const CourseItem = ({
  title,
  subtitle,
  courseId,
  imgSource,
  endDate,
  type,
  progress,
}: Props) => {
  const articleRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const url = `/${courseId}`;

  const keywordMapping = new Map<string, string>([
    ["LEARNING_PATH", "learning path"],
    ["COURSE", "Course"],
  ]);

  const titleMarkup = (
    <h3 className="text-base sm:text-base line-clamp-2 font-semibold leading-6">
      <Link
        to={url}
        className="after:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-full"
        tabIndex={-1}
      >
        {title}
      </Link>
    </h3>
  );

  return (
    <article
      ref={articleRef}
      className="relative flex gap-4 bg-white rounded-md shadow-sm focus:outline-none ring-inset focus:ring focus:ring-orange-400 focus:ring-offset-0"
      role="link"
      tabIndex={0}
      onKeyUp={(e) => {
        if (e.key === "Enter" && articleRef.current === e.target) {
          navigate(url);
        }
      }}
      aria-label={title}
    >
      <div className="[&_img]:aspect-1 [&_img]:rounded w-32">
        <img
          src={imgSource}
          loading="lazy"
          className="h-full w-full object-scale-down object-center"
          alt={title}
        />
      </div>
      <div className="flex flex-col w-full p-2">
        {titleMarkup}
        {subtitle && (
          <h4 className="text-sm line-clamp-2 font-semibold leading-6 text-gray-700">
            {subtitle}
          </h4>
        )}
        {/** End data */}
        {endDate && (
          <p className="text-xs pt-1 text-gray-500">Ending on {endDate}</p>
        )}

        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-[3px] bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-[#ff4637] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="w-10 text-end">
            <span className="text-sm text-gray-800 dark:text-white">
              {progress}%
            </span>
          </div>
        </div>

        {type && (
          <div className="text-sm text-gray-600">{`${keywordMapping.get(
            type
          )}`}</div>
        )}
      </div>
    </article>
  );
};
