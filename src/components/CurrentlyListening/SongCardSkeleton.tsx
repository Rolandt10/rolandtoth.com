export default function SongCardSkeleton() {
  return (
    <div className="flex animate-pulse gap-4">
      <div className="h-[4.1343rem] w-[4.1343rem] rounded-md bg-dark-500 shadow-md" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="h-5 w-3/4 rounded bg-dark-500" />
        <div className="h-4 w-2/4 rounded bg-dark-600" />
        <div className="flex items-center gap-1">
          <div className="h-5 w-[7.375rem] rounded-full bg-dark-600" />
        </div>
      </div>
    </div>
  );
}
