// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Assignment from "../../Components/Assignment/Assignment";

// const AllAssignment = () => {
//   const assignmentsLoader = useLoaderData();
//   const [assignments, setAssignments] = useState(assignmentsLoader);

//   return (
//     <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
//       <div className="">
//         <div className="mx-auto text-center">
//           <h1 className="text-3xl text-black font-semibold">
//             All <span className="text-blue-600 font-light">Assignment</span>
//           </h1>
//           <div className="mt-5">
//             <button>
//               <select className="select select-bordered join-item">
//                 <option disabled selected>
//                   Filter
//                 </option>
//                 <option>Easy</option>
//                 <option>Medium</option>
//                 <option>Hard</option>
//               </select>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
//         {assignments.map((assignment) => (
//           <Assignment
//             key={assignment._id}
//             assignment={assignment}
//             assignments={assignments}
//             setAssignment={setAssignments}
//           ></Assignment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllAssignment;
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Assignment from "../../Components/Assignment/Assignment";

const AllAssignment = () => {
  const assignmentsLoader = useLoaderData();
  const [assignments, setAssignments] = useState(assignmentsLoader);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // Filter assignments based on the selected difficulty
  const filteredAssignments =
    selectedDifficulty === "All"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.difficulty === selectedDifficulty
        );

  return (
    <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
      <div className="">
        <div className="mx-auto text-center">
          <h1 className="text-3xl text-black font-semibold">
            All <span className="text-blue-600 font-light">Assignment</span>
          </h1>
          <div className="mt-5">
            <button>
              <select
                className="select select-bordered join-item"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="All">Filter</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {filteredAssignments.map((assignment) => (
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
