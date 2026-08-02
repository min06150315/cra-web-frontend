export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#70b1f2] flex flex-col justify-between h-full animate-pulse select-none pointer-events-none">
      <div className="relative aspect-16/10 bg-gray-200 border-b-2 border-black">
        <div className="absolute top-3 left-3 w-16 h-6 bg-gray-300 rounded-md" />
      </div>

      <div className="p-6 grow flex flex-col justify-between bg-white">
        <div>
          <div className="h-6 bg-gray-200 rounded-md mb-3 w-3/4" />

          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-200 rounded-md w-full" />
            <div className="h-4 bg-gray-200 rounded-md w-5/6" />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <div className="h-5 bg-gray-200 rounded px-2 w-12" />
          <div className="h-5 bg-gray-200 rounded px-2 w-16" />
          <div className="h-5 bg-gray-200 rounded px-2 w-10" />
        </div>
      </div>
    </div>
  );
};
