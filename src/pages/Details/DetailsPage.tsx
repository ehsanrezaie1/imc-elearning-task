import { Breadcrumb } from "components/Breadcrumb";
import { DetailsSidebar } from "./components/DetailsSidebar";
import { usePage } from "context";
export const DetailsPage = () => {
  const { detailsPageData: record } = usePage();
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col-reverse sm:flex-row  w-full min-h-screen">
        <div className="flex-1 flex gap-2 flex-col">
          <div>
            <h3 className="text-base font-semibold">Planing Status</h3>
            {/** I got the first index for now, becasue there was not identifier to loop it */}
            <p className="text-sm">{record.description_data[0].content}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Start Date</h3>
            <p className="text-sm">{record.startDate}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold">End Date</h3>
            <p className="text-sm">{record.endDate}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Learning Mode</h3>
            <p className="text-sm">{record.learningForm}</p>
          </div>
        </div>
        <div className="w-full sm:w-[300px]">
          <DetailsSidebar
            startDate={record.startDate}
            endDate={record.endDate}
            learningForm={record.learningForm}
          />
        </div>
      </div>
    </>
  );
};
