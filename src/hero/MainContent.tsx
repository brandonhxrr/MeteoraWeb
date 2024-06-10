const MainContent = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-8 pt-16 lg:pt-0">
      <div className="flex flex-col justify-center w-full lg:w-1/2 text-left mb-6 lg:mb-0 lg:ml-28">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <img src="only_logo.svg" alt="Logo" className="h-16 w-auto mr-4" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center lg:text-left font-logo">
            Meteora
          </h1>
        </div>
        <h2 className="text-xl font-normal text-gray-600 sm:text-2xl pt-1 sm:pt-4 text-center lg:text-left">
          Meteora is an ML powered climate app for mobile devices built with Jetpack Compose and Kotlin Multiplatform
        </h2>
        <div className="mt-8 sm:mt-12 flex justify-center lg:justify-start">
          <a
            href="./files/Brandon_Herrera_resume.pdf"
            className="text-white rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 p-2 px-10 py-3 text-sm font-semibold shadow-sm"
          >
            Download
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:block lg:w-1/2 lg:h-96 px-6">
        <img
          src="splash.svg"
          alt="Splash"
          className="object-contain w-full lg:h-full"
        />
      </div>
    </div>
  );
};

export default MainContent;
