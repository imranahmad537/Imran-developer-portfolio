import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Subscribe1() {
  return (
    <div className="relative flex justify-center items-center  bg-gray-900 py-16 lg:py-5">
      <div className="left text-white">&right;</div>
      <div className=" ">
        <img src="/profile.png" alt="" className="w-100 h-100" />
      </div>
      <div className="right text-white">Right</div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#141414] to-[#000000] opacity-30"
        />
      </div>
    </div>
  );
}
