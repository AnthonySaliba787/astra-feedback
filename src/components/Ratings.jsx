function Ratings({ selectedRating, handleRatingChange }) {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-6 flex-wrap py-8">
      {Array.from({ length: 10 }, (_, index) => index + 1).map((rating) => (
        <button
          key={rating}
          onClick={() => handleRatingChange(rating)}
          className={`flex flex-col w-12 h-12 text-center text-xl font-bold justify-center items-center rounded-full cursor-pointer duration-200 ${
            selectedRating === rating
              ? "bg-neutral-700 text-white"
              : "hover:bg-neutral-200 hover:shadow-md"
          }`}
        >
          {rating}
        </button>
      ))}
    </div>
  );
}

export default Ratings;
