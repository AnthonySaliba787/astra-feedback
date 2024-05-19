import { useState } from "react";
import Ratings from "./Ratings";
import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const [selectedRating, setSelectedRating] = useState(null);
  const navigate = useNavigate();

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const deleteAccount = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <>
      <div className="max-w-4xl min-h-screen mx-auto text-center flex flex-col justify-center items-center px-8 py-8 gap-4">
        <h1 className="text-3xl font-semibold py-4">Feedback Form</h1>
        <div className="w-full flex flex-col justify-center items-center bg-neutral-100 shadow-md rounded-md px-4 py-4">
          <Ratings
            selectedRating={selectedRating}
            handleRatingChange={handleRatingChange}
          />
          <InputForm />
        </div>
        <p
          onClick={deleteAccount}
          className="text-sm w-3/4 text-center px-2 cursor-pointer font-medium text-neutral-500 hover:text-neutral-800 duration-300"
        >
          Delete Account
        </p>
      </div>
    </>
  );
}

export default FeedbackForm;
