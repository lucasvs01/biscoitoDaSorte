const menssageList = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
]

function changeTextInScreen2 () {
    let radonNumber = Math.floor(Math.random()*10)
    let printMenssage = menssageList[radonNumber]

    let h2 = document.querySelector(".screen2 p")
    h2.innerHTML = printMenssage
    
}

function changeClassHideInScreens(){
    
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    
}

function ButtonForClickToChangeTextScreen2 (){
    
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    
    changeTextInScreen2()
    
}

changeTextInScreen2()
