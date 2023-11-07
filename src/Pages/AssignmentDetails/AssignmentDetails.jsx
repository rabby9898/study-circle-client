import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const loadDetails = useLoaderData();
  const navigate = useNavigate();
  const { _id, imgUrl, title, marks, description, date } = loadDetails;

  const handleSubmit = (e) => {
    const form = e.target;
    const pdfLink = form.pdfLink.value;
    const note = form.note.value;

    const submitAssignment = {
      pdfLink,
      note,
    };
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submitAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Assignment Submitted Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        navigate("/");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 justify-around">
          <div className="text-center lg:text-left">
            <p className="text-sm my-6">
              <span className="font-semibold">Assignment ID:</span> {_id}
            </p>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg text-gray-500">{description}</p>
            <p className="text-lg">
              <span className="font-semibold">Marks:</span> {marks}
            </p>
            <p>
              <span className="font-semibold">Created on:</span> {date}
            </p>
            <div className="py-8">
              <button
                className="btn bg-blue-600 text-white px-3 py-2 w-full hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Take Assignment
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">PDF Link</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Pdf Link"
                        className="input input-bordered hover:outline-blue-500"
                        required
                        name="pdfLink"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Short Note</span>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Quick Note"
                        className="input input-bordered hover:outline-blue-500"
                        required
                        name="note"
                      />
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="form-control mt-6 btn bg-blue-600 text-white px-3 py-2 w-full hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent"
                    />
                  </form>
                </div>
              </dialog>
            </div>
          </div>
          <div className="card flex-shrink-0 w-[50%] shadow-2xl bg-base-100">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
