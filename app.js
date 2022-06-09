const formBtn = document.getElementById("form-btn");
const btns = document.querySelectorAll(".rate");
let pick = false;

const onSubmit = (e) => {
  console.log(pick);
  e.preventDefault();
  if (pick) {
    window.location.replace("thankyou.html");
  } else {
    alert("Please select a rating");
  }
};

const rateSelect = (e) => {
  pick = true;
  const btns = document.querySelectorAll(".rate");
  btns.forEach((el) => {
    if (el.id === e.target.id) {
      e.target.style.background = "hsl(25, 97%, 53%)";
      e.target.style.color = "white";
      localStorage.setItem("rating", e.target.innerText);
    } else {
      el.setAttribute("style", "background-color: hsl(216, 12%, 54%, 0.12);");
      el.setAttribute("style", "color: hsl(217, 12%, 63%);");
    }
  });
};

btns.forEach((item) => {
  item.addEventListener("click", rateSelect);
});

formBtn.addEventListener("click", onSubmit);