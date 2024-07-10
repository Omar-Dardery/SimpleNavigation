document.querySelector(".home-button").classList.add("active-button");

document.querySelector(".practice").classList.add("hidden");

document.querySelector(".study").classList.add("hidden");

document.querySelectorAll("button").forEach(Element => {
    Element.addEventListener("click", function (){
        document.querySelectorAll("button").forEach(subject => {
            subject.classList.remove("active-button");
        })
        document.querySelectorAll(".page").forEach(item => {
            item.classList.add("hidden");
        })
        this.classList.add("active-button");
        document.querySelector("." + this.innerText).classList.remove("hidden");
    })
})

