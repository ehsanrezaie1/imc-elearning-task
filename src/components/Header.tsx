import { usePage } from "../context";

export const Header = () => {
  const { headerInfo } = usePage();

  return (
    <div className="bg-white">
      <header className="flex flex-col bg-white justify-between px-4 pt-2 pb-0 mx-auto min-h-[100px] max-w-7xl">
        <div className="flex items-end">
          <div className="flex flex-1 flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-bold">{headerInfo.title}</h3>
              {headerInfo.subTitle && (
                <p className="text-md font-normal text-gray-600">
                  {headerInfo.subTitle}
                </p>
              )}
            </div>

            {/** Page sub title */}
            <ul className="space-x-6 flex whitespace-nowrap  mb-px">
              <li>
                <h2 className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-4 px-1 -mb-px text-black border-orange-500">
                  {headerInfo.pageTitle}
                </h2>
              </li>
            </ul>
          </div>
          {headerInfo.imageSource && (
            <div className="flex w-[120px] h-[80px] sm:w-[300px] sm:h-[120px] pt-2">
              <div className="bg-red-50 rounded-t flex-1">
                <img
                  src={headerInfo.imageSource}
                  loading="lazy"
                  className="h-full w-full object-scale-down object-center"
                  alt={headerInfo.title}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
