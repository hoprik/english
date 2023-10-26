let page = 0
let page_text = 0
let page_id = 0
let part = 1
let page_3 = 0

let text = "⠀is⠀Yarosalvl"

document.addEventListener("wheel", ()=>{
    if (page < 13){
        if (page == 1){
            document.querySelector(".page").insertAdjacentHTML("afterbegin", '<img src="./assets/2.jpg" class="bg2" alt="">')
            document.querySelector(".name").innerText += " "
        }

        document.querySelector(".bg1").style.opacity = 0.01 * (100 - page * 10)
    
        document.querySelector(".name").innerText += text[page]
    }
    if (page > 12 & page < 33){
        if (page == 13){
            document.querySelector(".bg1").remove()
            document.querySelector(".page").insertAdjacentHTML("beforeend", '<img src="./assets/3.jpg" class="bg3" alt="">')
            document.querySelector(".bg3").style.left = "-1920px"
            document.querySelector(".page").insertAdjacentHTML("beforeend", '<p class="name">It is situated on the river Volga</p>')
        }

        document.querySelector(".name").style.opacity = 0.01 * (100 - page_text * 10)
        document.querySelector(".bg3").style.left = Number(document.querySelector(".bg3").style.left.split("px")[0]) + 96 +'px'
        page_text++;
    }
    if (page > 32 & page < 43){
        document.querySelector(".light").style.opacity = 0.01 * (0 + page_id * 20)

        page_id++
    }
    if (page > 42 & page < 63){
        if (page == 43){
            document.querySelector(".light").style.zIndex = 0
            document.querySelector(".page").insertAdjacentHTML("beforeend", '<img src="./assets/4.jpg" class="bg4" alt="">')
            document.querySelector(".page").insertAdjacentHTML("beforeend", '<img src="./assets/5.jpg" class="bg5" alt="">')
            document.querySelector(".page").insertAdjacentHTML("beforeend", '<img src="./assets/6.jpg" class="bg6" alt="">')
        }

        if (part == 1){
            document.querySelector(".bg4").style.opacity = 0.01 * (100 - page_3 * 10)
            if (document.querySelector(".bg4").style.opacity == 1){
                part++
                page_3 = 0
            }
        }
        if (part == 2){
            document.querySelector(".bg5").style.opacity = 0.01 * (100 - page_3 * 10)
            if (document.querySelector(".bg5").style.opacity == 1){
                part++
                page_3 = 0
            }
        }
        if (part == 3){
            document.querySelector(".bg6").style.opacity = 0.01 * (100 - page_3 * 10)
            if (document.querySelector(".bg6").style.opacity == 1){
                part++
                page_3 = 0
            }
        }
        page_3++
    }
    page++;
})

