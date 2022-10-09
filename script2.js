var n1 = document.getElementById("n1")
n1.addEventListener("click", ()=>{
    n1.classList.add("mactive")
    n2.classList.remove("mactive")
    localStorage.setItem("script",'mode1')
})
var n2 = document.getElementById("n2")
n2.addEventListener("click", ()=>{
    n2.classList.add("mactive")
    n1.classList.remove("mactive")
    localStorage.setItem("script",'mode2')
})