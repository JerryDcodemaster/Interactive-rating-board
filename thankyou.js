const thankText = document.querySelector(".thanktext");

let score = localStorage.getItem("rating");
thankText.innerText = `You selected ${score} out of 5 stars`;