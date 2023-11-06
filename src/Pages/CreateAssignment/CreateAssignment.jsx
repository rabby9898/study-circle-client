import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProduct = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.imgUrl.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    console.log(title, marks, thumbnail, imgUrl, difficulty, date, description);
    // const products = {
    //   imgUrl,
    //   title,
    //   marks,
    //   description,
    //   thumbnail,
    //   difficulty,
    //   date,
    // };

    // fetch(
    //   "https://reeftech-server-h7d6u6kgy-fajle-rabbys-projects.vercel.app/products",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(products),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Your Product Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //     navigate("/");
    //   });
  };
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <div className="mx-auto text-center">
        <h1 className="text-3xl text-black font-semibold">
          Create Your{" "}
          <span className="text-blue-600 font-light">Assignment</span>
        </h1>
      </div>
      <div className="flex justify-center mx-auto">
        <form className="w-[600px]" onSubmit={handleAddProduct}>
          <label className="label">
            <span className="label-text-base">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered input-info w-full"
            name="title"
          />
          <label className="label">
            <span className="label-text-base">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short Description"
            className="input input-bordered input-info w-full"
            name="description"
          />
          <label className="label">
            <span className="label-text-base">Marks</span>
          </label>
          <input
            type="text"
            placeholder="Marks"
            className="input input-bordered input-info w-full"
            name="marks"
          />
          <label className="label">
            <span className="label-text-base">Thumbnail URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered input-info w-full"
            name="thumbnail"
          />
          <label className="label">
            <span className="label-text-base">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered input-info w-full"
            name="imgUrl"
          />
          <div>
            <select
              className="text-lg bg-blue-100 border my-5 py-2 rounded-lg px-8 gap-3"
              name="difficulty"
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
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn input-info w-full mt-8 bg-[#00A3D1] uppercase text-white hover:bg-black hover:border hover:border-black"
            value="Create Assignment"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
