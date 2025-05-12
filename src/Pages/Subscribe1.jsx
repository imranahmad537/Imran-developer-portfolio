import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Subscribe1() {
  return (
    <div className="relative flex justify-center items-center  bg-gray-900 py-16 lg:py-5">
      <div
        style={{
          fontSize: "250px",
          textShadow:
            "-1px -1px 0 #0a3ffc, 1px -1px 0 #0a3ffc, -1px 1px 0 #0a3ffc, 1px 1px #0a3ffc",
        }}
        className="absolute -top-20 mr-90 font-bold text-black opacity-40"
      >
        &lt;
      </div>
      <div className="name absolute text-5xl top-55 text-white mr-70 font-bold ">
        Imran <br />
        &nbsp;&nbsp;&nbsp;Ahmad
      </div>

      <div className=" ">
        <img src="/profile1.png" alt="" className="w-100 h-100" />
      </div>
      <div
        style={{
          fontSize: "250px",
          textShadow:
            "-1px -1px 0 #0a3ffc, 1px -1px 0 #0a3ffc, -1px 1px 0 #0a3ffc, 1px 1px #0a3ffc",
        }}
        className="absolute -bottom-8 ml-80 font-bold text-black opacity-40"
      >
        &gt;
      </div>
      <div className="name absolute top-25 text-white ml-160  mr-10">
       <h1 className="text-2xl font-bold">Certified MERN Stack Developer</h1>
       <p className="">Helping Small &amp; Medium Bussinesses Worldwide </p>
      </div>
      

    
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
