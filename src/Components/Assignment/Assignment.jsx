import { Link } from "react-router-dom";

const Assignment = ({ assignment }) => {
  const { _id, imgUrl, title, marks, difficulty } = assignment;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl ">
        <img className="w-full" src={imgUrl} alt="Shoes" />

        <div className="px-9">
          <h2 className="card-title my-3 text-black text-xl font-semibold">
            {title}
          </h2>
          <p className="text-black text-base my-3">Marks: {marks}</p>
          <p className="bg-blue-600 text-white py-2 px-6 capitalize text-sm rounded-md my-3 max-w-fit">
            {difficulty}
          </p>
          <div className="flex justify-center gap-4 my-4">
            <Link to={`/assignmentDetails/${_id}`}>
              <button className="btn bg-blue-600 text-white px-3 py-2 w-full hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent">
                View Assignment
              </button>
            </Link>
            <Link to={`/updateAssignment/${_id}`}>
              <button className="btn bg-transparent text-blue-600 w-full hover:border border-blue-600 hover:bg-blue-600 hover:text-white">
                Update Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
