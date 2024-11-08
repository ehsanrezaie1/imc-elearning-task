export const Skeleton = () => {
  return [1, 2, 3, 4, 5].map(() => {
    return (
      <div className="border border-gray-200 shadow rounded-md p-4 w-full bg-white">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-md bg-slate-200 h-20 w-20"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded w-3/12"></div>
              <div className="h-2 bg-slate-200 rounded w-2/12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
