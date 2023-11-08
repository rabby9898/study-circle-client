import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Assignment = ({ assignment, assignments, setAssignment }) => {
  const { _id, imgUrl, title, marks, difficulty } = assignment;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-circle-server.vercel.app/assignments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = assignments.filter((pd) => pd._id !== _id);
              setAssignment(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
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
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 text-white hover:text-red-500 w-full my-4"
            >
              Delete Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
