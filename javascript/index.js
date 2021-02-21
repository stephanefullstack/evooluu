  const burger = document.querySelector(".menu");
    burger.addEventListener('click' , function (event) {
    burger.classList.add("oppenned");
    event.stopPropagation();

    const cross = document.querySelector("body");
      cross.addEventListener('click' , function (event) {
      burger.classList.remove("oppenned");
    });

    const cross4 = document.querySelector(".menu_ul");
      cross4.addEventListener('click' , function (event) {
      burger.classList.remove("oppenned");
      event.stopPropagation();
    });
  });
