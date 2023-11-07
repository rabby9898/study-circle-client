const Faq = () => {
  return (
    <div className="px-2 md:px-10 lg:px-16 py-5 md:py-10">
      <div className="mx-auto text-center my-10">
        <h1 className="text-3xl text-black font-semibold capitalize">
          frequently asked{" "}
          <span className="text-blue-600 font-light">questions (FAQs)</span>
        </h1>
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What are the different difficulty levels of assignments on the
            website
          </div>
          <div className="collapse-content">
            <p>
              Our website offers assignments categorized into three difficulty
              levels: "Easy," "Medium," and "Hard." You can choose assignments
              based on your preferred level of challenge.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I filter assignments based on their difficulty level?
          </div>
          <div className="collapse-content">
            <p>
              To filter assignments, use the dropdown menu labeled "Difficulty
              Level" on the All Assignments page.{" "}
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            When are the assignments due?
          </div>
          <div className="collapse-content">
            <p>
              Each assignment has a specific due date mentioned in its
              description. Please check the assignment details for the exact
              date.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I submit multiple assignments at once?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can submit multiple assignments simultaneously. Simply
              complete the assignments you wish to submit and follow the
              submission guidelines for each.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I modify my assignment submissions after they are submitted?
          </div>
          <div className="collapse-content">
            <p>
              Once you have submitted an assignment, modifications are typically
              not allowed. Ensure you review and complete your assignments
              accurately before submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
