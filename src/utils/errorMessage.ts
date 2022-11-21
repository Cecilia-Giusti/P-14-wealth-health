const errorMessage = (error: string) => {
  const errorMessage = document.getElementById("errorMessage");

  error !== "error"
    ? errorMessage?.classList.add("hidden")
    : errorMessage?.classList.remove("hidden");
};
export default errorMessage;
