var oq = localStorage.getItem("script")
if (oq == 'mode1'){
    setTimeout(() => {
        var body = document.querySelector('body')
        var header = document.querySelector('header')
        var totallar = body.clientWidth
        var totalal = header.clientHeight + 160
        var balltop = totalal
        setInterval(() => {
            crie() 
        }, 500);
        var ponto = 0
        function crie() {
            
            var aleatorio = (num) => Math.floor(Math.random() * num)
            var alex = aleatorio(totallar)
            alex = aleatorio(aleatorio(totallar) - 100)
            aley = aleatorio(aleatorio(totalal))
            if (alex < 60){
                alex = 60
            }
        
            var ball = document.createElement("span")
            ball.classList.add("ball")
            ball.style.left=alex+'px'
            ball.style.top=totalal+'px'
        
            setTimeout(() => {
                ball.style.top=30+'px'
            }, 200);
        
            setTimeout(() => {
                ball.classList.add("active")
            }, 500);
            header.appendChild(ball)
        
        
            ball.addEventListener("mouseenter", (event)=>{
                ponto++
                document.querySelector(".cont").innerHTML=ponto
                balltop = totalal
                ball.style.background='green'
                ball.classList.remove("active")
                setTimeout(() => {
                    event.target.remove()
                }, 500);
            })
        }
        setInterval(() => {
            balltop = balltop - 100
            console.log(balltop)
            if (balltop <= 0){
                alert('perdeu')
                window.location.href='index.html'
            }
        }, 500);
            
    }, 2000);
    
}
if (oq == 'mode2'){
    



var body = document.querySelector('body')
var header = document.querySelector('header')
var totallar = body.clientWidth
var totalal = header.clientHeight + 160
var balltop = totalal
crie()
var ponto = 0
function crie() {
    
    var aleatorio = (num) => Math.floor(Math.random() * num)
    var alex = aleatorio(totallar)
    alex = aleatorio(aleatorio(totallar) - 100)
    aley = aleatorio(aleatorio(totalal))
    if (alex < 60){
        alex = 60
    }

    var ball = document.createElement("span")
    ball.classList.add("ball")
    ball.style.left=alex+'px'
    ball.style.top=totalal+'px'

    setTimeout(() => {
        ball.style.top=30+'px'
    }, 200);

    setTimeout(() => {
        ball.classList.add("active")
    }, 500);
    header.appendChild(ball)


    ball.addEventListener("mouseenter", (event)=>{
        ponto++
        document.querySelector(".cont").innerHTML=ponto
        balltop = totalal
        ball.style.background='green'
        ball.classList.remove("active")
        crie()
        crie()
        setTimeout(() => {
            event.target.remove()
        }, 500);
    })
    ball.addEventListener("click", (event)=>{
        ponto++
        document.querySelector(".cont").innerHTML=ponto
        balltop = totalal
        ball.style.background='green'
        ball.classList.remove("active")
        crie()
        crie()
        setTimeout(() => {
            event.target.remove()
        }, 500);
    })
}
window.addEventListener("keydown", (e)=>{
    var tecla = e.keyCode
    if (tecla = 32){
        var ball2 = document.querySelectorAll(".ball")
        ball2.forEach(element => {
            element.click()
        });
    }
})
setInterval(() => {
    balltop = balltop - 100
    console.log(balltop)
    if (balltop <= 0){
        alert('perdeu')
        window.location.href='index.html'
    }
}, 500);

}