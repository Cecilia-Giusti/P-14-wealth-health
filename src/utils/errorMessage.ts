const errorMessage = (error: boolean) => {
  const errorMessage = document.getElementById("errorMessage");

  error
    ? errorMessage?.classList.remove("hidden")
    : errorMessage?.classList.add("hidden");
};
export default errorMessage;
