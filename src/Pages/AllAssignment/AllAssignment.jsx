import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "../../Components/Assignment/Assignment";

const AllAssignment = () => {
  const assignmentsLoader = useLoaderData();
  const [assignments, setAssignments] = useState(assignmentsLoader);

  console.log(assignmentsLoader);
  return (
    <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
      <h1 className="text-center">Our Popular Products</h1>
      <div className="grid grid-cols-2 gap-8 my-10">
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
