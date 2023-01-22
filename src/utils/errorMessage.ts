const errorMessage = (error: boolean) => {
  const errorMessage = document.getElementById("errorMessage");

  error
    ? errorMessage?.classList.remove("hidden")
    : errorMessage?.classList.add("hidden");

  error
    ? errorMessage?.removeAttribute("aria-hidden")
    : errorMessage?.setAttribute("aria-hidden", "false");
  error
    ? errorMessage?.removeAttribute("aria-disabled")
    : errorMessage?.setAttribute("aria-disabled", "false");
};
export default errorMessage;
