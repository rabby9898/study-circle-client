import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const backgroundImageUrl =
  "url(https://i.ibb.co/T21Qgcr/back-school-witch-school-supplies.jpg)";

const UpdateAssignment = () => {
  const loadAssignment = useLoaderData();
  const { _id, imgUrl, title, marks, difficulty, description, date } =
    loadAssignment;
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const navigate = useNavigate();
  const handleAssignment = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.imgUrl.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;

    const UpdateAssignment = {
      imgUrl,
      title,
      marks,
      description,
      thumbnail,
      difficulty,
      date,
    };

    fetch(`http://localhost:5000/assignments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Assignment Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
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
          Update Your{" "}
          <span className="text-blue-600 font-light">Assignment</span>
        </h1>
      </div>
      <div className="flex justify-center mx-auto ">
        <form className="w-[600px]" onSubmit={handleAssignment}>
          <label className="label">
            <span className="label-text-lg font-semibold">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full "
            name="title"
            defaultValue={title}
          />
          <label className="label">
            <span className="label-text-lg font-semibold">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short Description"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="description"
            cols="30"
            rows="10"
            defaultValue={description}
          />
          <label className="label">
            <span className="label-text-lg font-semibold">Marks</span>
          </label>
          <input
            type="text"
            placeholder="Marks"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="marks"
            defaultValue={marks}
          />
          <label className="label">
            <span className="label-text-lg font-semibold">
              Thumbnail Image URL
            </span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered border-blue-500 focus:outline-blue-500 focus:border-0 w-full"
            name="imgUrl"
            defaultValue={imgUrl}
          />
          <div>
            <select
              className="text-lg bg-blue-100 border my-5 py-2 rounded-lg px-8 gap-3"
              name="difficulty"
              defaultValue={difficulty}
            >
              <option value="0">Difficulty Level:</option>
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="2">Hard</option>
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
                defaultValue={date}
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn input-info w-full mt-8 bg-blue-600 uppercase text-white hover:bg-black hover:border hover:border-black"
            value="Update Assignment"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
