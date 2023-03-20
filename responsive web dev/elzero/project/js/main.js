let liHowClicked = document.querySelectorAll(".information .unstyledList li")
let infoContent = document.querySelectorAll(".info-content div")


liHowClicked.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        liHowClicked.forEach((el)=>{
            el.classList.remove("selected")
        })
        ele.classList.add("selected")
        infoContent.forEach((el)=>{
            el.style.display = "none"
        })
        document.querySelector(`.info-content div.${ele.innerHTML}`).style.display = 'block'
    })
})