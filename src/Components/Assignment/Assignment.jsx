const Assignment = ({ assignment }) => {
  const { imgUrl, title, marks, difficulty } = assignment;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl px-5">
        <figure>
          <img src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{marks}</p>
          <p>{difficulty}</p>
          <div className="flex justify-center gap-6">
            <button className="btn bg-blue-600 text-white hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent">
              View Assignment
            </button>
            <button className="btn bg-blue-600 text-white hover:border hover:border-blue-600 hover:text-blue-600 hover:bg-transparent">
              Update Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
