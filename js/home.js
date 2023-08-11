document
  .querySelector(".btn-topbar_close")
  .addEventListener("click", function () {
    document.querySelector(".announcement-bar").remove();
    document.documentElement.style.setProperty(
      "--sf-announcement-height",
      "0px"
    );
  });
