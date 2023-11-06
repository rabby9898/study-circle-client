import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "../../Components/Assignment/Assignment";

const AllAssignment = () => {
  const assignmentsLoader = useLoaderData();
  const [assignments, setAssignments] = useState(assignmentsLoader);

  console.log(assignmentsLoader);
  return (
    <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
      <div className="mx-auto text-center">
        <h1 className="text-3xl text-black font-semibold">
          All <span className="text-blue-600 font-light">Assignment</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {assignments.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            assignments={assignments}
            setAssignment={setAssignments}
          ></Assignment>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
