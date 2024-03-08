export function VideoCard(props: any) {
  return (
    <div className="m-0 p-0">
      <img src="/tumbnail.jpg" alt=""  className="mb-4 rounded-xl" />
      <div className="grid grid-cols-12">
        <div className="col-span-1 pl-2 pt-1 ">
          <img
            src={props.image}
            alt=""
            className="rounded-full w-14 "
          />
        </div>
        <div className="col-span-11 ">
          <div>
            {props.title}
          </div>
          <div className="col-span-10 text-gray-400 text-base">{props.author}</div>
          <div className="col-span-10 text-gray-400 text-base">{props.views} | {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
