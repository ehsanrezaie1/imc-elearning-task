import { useLocation } from "react-router-dom";

interface Props {
  startDate?: string;
  endDate?: string;
  learningForm?: string;
}

export const DetailsSidebar = ({ startDate, endDate, learningForm }: Props) => {
  const location = useLocation();

  const handleCopyClick = () => {
    const currentUrl = window.location.origin + location.pathname;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Current URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  const handleEmailClick = () => {
    const email = "ehr1990@gmail.com";
    const subject = "Hello!";
    const body = "This is an email body.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-sm p-4 flex flex-col gap-2 rounded bg-white">
        <div className="flex gap-1 flex-col">
          <h3 className="text-base font-semibold">Start Data</h3>
          <p className="text-sm">{startDate}</p>
        </div>
        <div className="flex gap-1 flex-col">
          <h3 className="text-base font-semibold">End Data</h3>
          <p className="text-sm">{endDate}</p>
        </div>
        <div className="flex gap-1 flex-col">
          <h3 className="text-base font-semibold">Learning Mode</h3>
          <p className="text-sm">{learningForm}</p>
        </div>
      </div>
      <div className="shadow-sm p-4 flex items-center flex-col gap-2 rounded bg-white">
        <h3>Share this course</h3>
        <div className="flex gap-2 text-[#ff720b]">
          <button
            className="border rounded p-1 border-gray-200 bg-gray-100"
            aria-label="copy"
            onClick={handleCopyClick}
          >
            <svg
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </button>
          <button
            aria-label="email"
            className="border rounded p-1 border-gray-200 bg-gray-100"
            onClick={handleEmailClick}
          >
            <svg
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
