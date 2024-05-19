function InputForm() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <textarea
          type="text"
          placeholder="Enter feedback"
          className="resize-none px-4 py-4 w-3/4 h-48 bg-neutral-100 shadow-md rounded-md hover:bg-neutral-200 focus:bg-neutral-200 duration-200 break-words border-2 text-neutral-700"
        />
        <button className="w-1/4 font-medium py-4 bg-neutral-600 text-neutral-100 shadow-md rounded-md hover:bg-neutral-500 focus:bg-neutral-500 active:bg-neutral-400 duration-300">
          Submit
        </button>
      </div>
    </>
  );
}

export default InputForm;
