let topBtn = document.querySelector('.top-btn ');
window.onscroll = function () {
    if (scrollY >= 585) {
        document.querySelector(".header").style.backgroundColor = "#161616";
        topBtn.style.bottom = "20px";
    } else {
        document.querySelector(".header").style.backgroundColor = "rgb(0 0 0 / 70%)";
        topBtn.style.bottom = "-100px";
    }
}
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

document.querySelector(".dropdown").onmouseover = function () {
    document.querySelector(".dropdown-menu").style.display = "block"
}
document.querySelector(".dropdown").onmouseout = function () {
    document.querySelector(".dropdown-menu").style.display = "none"
}


let barUl = document.querySelector(".header ul");
document.querySelector(".bar").onclick = function () {
    if (barUl.style.display === "flex") {
        barUl.style.display = "none";
    } else {
        barUl.style.display = "flex";
    }
}

// Images
let bullets = document.querySelectorAll(".bullets li"),
    img = document.querySelector(".item .image img");
imgsArr = ["images/about1.jpg", "images/about2.jpg", "images/about1.jpg"];
bullets.forEach(bull => {
    bull.onclick = function () {
        bullets.forEach(ele => {
            ele.classList.remove("active")
        })
        this.classList.add("active");
        img.src = imgsArr[this.id]
    }
});