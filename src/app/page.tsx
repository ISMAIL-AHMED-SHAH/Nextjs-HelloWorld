import Link from "next/link";


export default function Home() {
  return (
    <section className="p-4 flex flex-col items-center justify-center mx-auto min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 via-black to-blue-500">

      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white m-2 shadow-lg">
        Milestone 01
      </h1>

      <h1 className="text-center text-4xl font-extrabold text-white mb-4 relative shadow-2xl">
        Next Js Application
        <div className="color-layer"></div>
      </h1>

      <div className="border-collapse bg-purple-600 w-80 h-80 flex items-center mt-6 justify-center rounded-xl shadow-2xl">
        <h1 className="text-center text-5xl font-extrabold text-white m-6 animate-bounce">
          Hello World!
        </h1>
      </div>

      <div className="mt-6 text-white font-bold rounded-lg flex flex-col items-center w-full p-6">
        <p className="p-5">
        Explore the Next.js application file structure by clicking the button below to visit my GitHub repository:
        </p>

        <Link
          href={
            "https://github.com/ISMAIL-AHMED-SHAH/Nextjs-HelloWorld.git"
          }
        >
          <button className="text-xl bg-gradient-to-r from-green-00 to-green-700 p-4 text-center rounded-lg hover:bg-gradient-to-l hover:from-green-700 hover:to-blue-900 shadow-lg">
            Click Me to see the Code
          </button>
        </Link>
      </div>

      <div className="mt-4 text-white font-bold rounded-lg">
        <p className="p-5">Created by: ISMAIL AHMED SHAH</p>
      </div>

    </section>
  );
}
