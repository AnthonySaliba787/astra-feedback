import { useState } from "react";
import Ratings from "./Ratings";
import InputForm from "./InputForm";

function FeedbackForm() {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <>
      <div className="max-w-4xl min-h-screen mx-auto text-center flex flex-col justify-center items-center px-8 py-8">
        <h1 className="text-3xl font-semibold py-4">Feedback Form</h1>
        <div className="w-full flex flex-col justify-center items-center bg-neutral-100 shadow-md rounded-md px-4 py-4">
          <Ratings
            selectedRating={selectedRating}
            handleRatingChange={handleRatingChange}
          />
          <InputForm />
        </div>
      </div>
    </>
  );
}

export default FeedbackForm;
