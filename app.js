const btn = document.querySelectorAll(".btns a");
    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
    })
  
});

