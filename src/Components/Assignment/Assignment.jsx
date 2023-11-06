const Assignment = ({ assignment }) => {
  const { imgUrl, title, marks, difficulty } = assignment;
  console.log(assignment);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl px-5">
        <figure>
          <img src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{marks}</p>
          <p>{difficulty}</p>
          <div className="flex justify-center gap-6">
            <button className="btn btn-primary">View Assignment</button>
            <button className="btn btn-primary">Update Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
