const SubmitButton = () => {
  return (
    <div className="w-full flex flex-row justify-end">
      <button
        type="submit"
        className="rounded-md py-2 px-4 mt-10 transition-colors duration-300 transform bg-customGrey hover:bg-tbcBlue hover:text-white"
      >
        Log In
      </button>
    </div>
  );
};

export default SubmitButton;
