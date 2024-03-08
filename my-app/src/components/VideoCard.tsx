export function VideoCard(props: any) {
  return (
    <div className="m-0 p-3 cursor-pointer ">
      <img src={props.thumbnail} alt=""  className="mb-4 rounded-xl" />
      <div className="grid grid-cols-12">
        <div className="col-span-1 pl-2 pt-1 ">
          <img
            src={props.logo}
            alt=""
            className="rounded-full w-15 "
          />
        </div>
        <div className="col-span-11 pl-2 ">
          <div>
            {props.title}
          </div>
          <div className="col-span-10 text-gray-400 text-base">{props.author}</div>
          <div className="col-span-10 text-gray-400 text-base">{props.viewCount} | {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
