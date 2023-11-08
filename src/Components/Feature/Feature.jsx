const Feature = () => {
  return (
    <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
      <div className="mx-auto text-center my-10">
        <h1 className="text-3xl capitalize text-blue-600 font-light">
          Top Featured{" "}
          <span className="text-black font-semibold">Assignments</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-full md:w-[300px] lg:w-96 bg-base-100 shadow-xl">
          <img
            className="w-full"
            src="https://i.ibb.co/RNLBWcr/calendar.jpg"
            alt="Shoes"
          />
          <div className="px-9">
            <h2 className="card-title my-3 text-black text-xl font-semibold">
              History Research Paper
            </h2>
            <p className="text-black text-base my-3">Marks: 60/60</p>
            <p className="bg-blue-600 text-white py-2 px-6 capitalize text-sm rounded-md my-3 max-w-fit">
              Hard
            </p>
            <p className=" text-gray-600 text-base my-4">
              Research and write a paper on a historical event or figure
            </p>
            <p className=" text-black capitalize pb-8">Date: 2023/10/17</p>
          </div>
        </div>

        <div className="card w-full md:w-[300px] lg:w-96 bg-base-100 shadow-xl">
          <img
            className="w-full"
            src="https://i.ibb.co/RNLBWcr/calendar.jpg"
            alt="Shoes"
          />
          <div className="px-9">
            <h2 className="card-title my-3 text-black text-xl font-semibold">
              History Research Paper
            </h2>
            <p className="text-black text-base my-3">Marks: 60/60</p>
            <p className="bg-blue-600 text-white py-2 px-6 capitalize text-sm rounded-md my-3 max-w-fit">
              Hard
            </p>
            <p className=" text-gray-600 text-base my-4">
              Research and write a paper on a historical event or figure
            </p>
            <p className=" text-black capitalize pb-8">Date: 2023/10/17</p>
          </div>
        </div>

        <div className="card w-full md:w-[300px] lg:w-96 bg-base-100 shadow-xl mt-7">
          <img
            className="w-full"
            src="https://i.ibb.co/RNLBWcr/calendar.jpg"
            alt="Shoes"
          />
          <div className="px-9">
            <h2 className="card-title my-3 text-black text-xl font-semibold">
              History Research Paper
            </h2>
            <p className="text-black text-base my-3">Marks: 60/60</p>
            <p className="bg-blue-600 text-white py-2 px-6 capitalize text-sm rounded-md my-3 max-w-fit">
              Hard
            </p>
            <p className=" text-gray-600 text-base my-4">
              Research and write a paper on a historical event or figure
            </p>
            <p className=" text-black capitalize pb-8">Date: 2023/10/17</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
