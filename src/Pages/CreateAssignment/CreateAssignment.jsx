import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
const backgroundImageUrl =
  "url(https://i.ibb.co/T21Qgcr/back-school-witch-school-supplies.jpg)";

const AddProduct = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useContext(AuthContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const navigate = useNavigate();
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.imgUrl.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    console.log(title, marks, imgUrl, difficulty, date, description);

    const textRegex = /^[A-Za-z\s\-.,!@#$%^&*()_+]*$/;
    if (!textRegex.test(title)) {
      toast.error("Title must be text");
      return;
    } else if (isNaN(marks)) {
      toast.error("Marks must be a number");
      return;
    }
    const assignment = {
      email,
      imgUrl,
      title,
      marks,
      description,
      difficulty,
      date,
    };

    fetch("https://study-circle-server.vercel.app/assignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Assignment Created Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        navigate("/");
      });
  };
  return (
    <div
      className="px-2 md:px-10 lg:px-16 py-5 md:py-10"
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="mx-auto text-center">
        <h1 className="text-3xl text-black font-semibold">
          Create Your{" "}
          <span className="text-blue-600 font-light">Assignment</span>
        </h1>
      </div>
      <div className="flex justify-center mx-auto ">
        <form className="w-[600px]" onSubmit={handleCreateAssignment}>
          <label className="label">
            <span className="label-text-lg font-semibold">
              Title <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full "
            name="title"
            required
          />
          <label className="label">
            <span className="label-text-lg font-semibold">
              Description <span className="text-red-500">*</span>
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Short Description"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="description"
            cols="30"
            rows="10"
            required
          />
          <label className="label">
            <span className="label-text-lg font-semibold">
              Marks <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Marks"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="marks"
            required
          />
          <label className="label">
            <span className="label-text-lg font-semibold">
              Thumbnail Image URL<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="imgUrl"
            required
          />
          <div>
            <select
              className="select select-bordered join-item text-lg bg-blue-100 border my-5 py-2 rounded-lg px-8 gap-3"
              name="difficulty"
            >
              <option disabled selected>
                Difficulty Level:
              </option>
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
          </div>

          <div className="input-container">
            <div className="input-date-container">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="input-date-picker border border-blue-400 py-2 px-6 rounded-md"
                placeholderText="Due Date"
                name="date"
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn input-info w-full mt-8 bg-blue-600 uppercase text-white hover:bg-black hover:border hover:border-black"
            value="Create Assignment"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
