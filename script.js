"use strict";

document.addEventListener("mousemove", (event) => {
  console.log(event.clientX, event.clientY);

  const snowSpan = document.createElement("span");
  snowSpan.classList.add("snowflake");

  snowSpan.style.left = event.clientX + "px";
  snowSpan.style.top = event.clientY + "px";

  let size = Math.floor(Math.random() * 30);
  snowSpan.style.width = size + "px";
  snowSpan.style.height = size + "px";
  document.body.appendChild(snowSpan);

  setTimeout(() => {
    snowSpan.remove();
  }, 1500);
});
