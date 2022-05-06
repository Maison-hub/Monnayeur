var item = new Map(); 
item.set("chocolat", 50);
item.set("bonbon", 100);
item.set("bonbon", 100);
item.set("café", 150);

let liste = document.querySelector('.listeItem')
let body = document.querySelector('body')

for (var [key, value] of item){
    liste.innerHTML += `<li data-prix="${value}">${key}: ${value/100}€</li>`;
}

let ajouterBtn = document.querySelector('.ajouterBtn')
let ajouterWrap = document.querySelector('.ajouterWrap')
let inputName = document.querySelector('.inputName')
let inputPrix = document.querySelector('.inputPrix')
let newItemValidate = document.querySelector('.ajouterBtn.validate')
let plusRotate = document.querySelector('.ajouterBtn p')

let itemLi = document.querySelectorAll('.listeItem li')

ajouterBtn.onclick = ()=>{
    plusRotate.classList.toggle('plusRotate')
    ajouterWrap.classList.toggle('apear')
    inputName.style.animationDelay = ".1s"
    inputName.classList.toggle('apear')
    inputPrix.style.animationDelay = ".2s"
    inputPrix.classList.toggle('apear')
    newItemValidate.style.animationDelay = ".3s"
    newItemValidate.classList.toggle('apear')
}

newItemValidate.onclick = ()=>{
    getName = inputName.value
    getPrice = parseFloat(inputPrix.value)
    if(getName == ''){
        alert(`Le nom choisit n'est pas bon`)
        return
    }
    if(isNaN(getPrice)){
        alert(`Le prix saisie n'est pas bon`)
        return
    }
    item.set(getName, getPrice*100);
    liste.innerHTML += `<li data-prix="${getPrice*100}">${getName}: ${getPrice}€</li>`;
    itemLi = document.querySelectorAll('.listeItem li')
    console.log(itemLi)
    itemLi.forEach(el => el.onclick = ()=>{
        el.classList.toggle('activeLi')
    })
}

let piece = document.querySelectorAll('.listePiece a')
let HtmlListePiece = document.querySelector('.pieceUtilise')

let listePieceUtilise = document.querySelectorAll('.pieceUtilise li')
let totPieceDonne = document.querySelector('.totalPieceDonne')
let totaldonne = 0


piece.forEach(el => el.onclick = ()=>{
    let centime = el.dataset.centime
    totaldonne += parseInt(centime)
    HtmlListePiece.innerHTML += `<li data-centime="${centime}">${centime/100} €</li>`
    totPieceDonne.innerHTML = `total : ${totaldonne/100} €`
    listePieceUtilise = document.querySelectorAll('.pieceUtilise li')
})


body.onclick = ()=>{
    listePieceUtilise.forEach(el => el.onclick = ()=>{
        let centimeSup = el.dataset.centime
        console.log(totaldonne)
        totaldonne -= parseInt(centimeSup)
        console.log(totaldonne)
        totPieceDonne.innerHTML = `total : ${totaldonne/100} €`
        el.remove()
    })
}


let pieceDispo = [200, 100, 50, 20, 10, 5, 2, 1]

let payer = document.querySelector('.payer')
let piecearendre = []
let htmlListeaRendre = document.querySelector('.arendre')
let itemchoice = []


itemLi.forEach(el => el.onclick = ()=>{
    el.classList.toggle('activeLi')
})

payer.onclick = ()=>{
    piecearendre = []
    htmlListeaRendre.innerHTML = ''
    itemchoice = document.querySelectorAll('.activeLi')
    let tot = totaldonne
    if(itemchoice.length != 1){
        alert("Le nombre d'objets a acheter n'est pas bon")
        return
    }
    let prixapayer = parseInt(itemchoice[0].dataset.prix)
    if(tot < prixapayer){
        alert("vous n'avez pas donné assez d'argent")
        return
    }
    pieceDispo.forEach(function(el){
        while(el<=tot -prixapayer){
            piecearendre.push(el)
            tot -= el
        }
    })  
    piecearendre.forEach(function(el){
        htmlListeaRendre.innerHTML += `<li>${el/100} €</li>`;
    })
}

let wave = document.querySelector('.wave')
wave.style.top = `-${wave.clientHeight - 2}px `

window.addEventListener('resize', ()=>{
    wave.style.top = `-${wave.clientHeight - 2}px `
});

let swich = document.querySelector('.switch');
let home = document.querySelector('.home');
let swichInput = document.querySelector('.switch input')
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let homeImg = document.querySelector('.heroImg');


swichInput.addEventListener('change', ()=>{   
    body.classList.remove('default')
    body.classList.toggle('dark')
    home.classList.toggle('darkCircleBg')
    if(body.classList.contains('dark')){
        wave.src = './image/waveDark.svg'
        homeImg.src = './image/homme-monnaieNB.png'
        document.title = 'MONNAYEUR 🌚'
    }
    if(!body.classList.contains('dark')){
        wave.src = './image/wave.svg'
        homeImg.src = './image/homme-monnaie.png'
        document.title = 'MONNAYEUR 🌞'
    }
})

var pageIcon = document.querySelector("link[rel~='icon']");

window.onfocus = function () {
    pageIcon.href = './image/piece-de-monnaie.png'
    if(body.classList.contains('default')){
        document.title = 'MONNAYEUR'
        console.log('frf')
    }
    if(body.classList.contains('dark')){
        document.title = 'MONNAYEUR 🌚'
    }
    if(!body.classList.contains('dark') & !body.classList.contains('default')){
        document.title = 'MONNAYEUR 🌞'
    }
};

window.onblur = function () {
    pageIcon.href = './image/piece-de-monnaieNB.png'
};

window.onload =  ()=>{
    if(userPrefersDark){
        swichInput.checked = true
        body.classList.remove('default')
        body.classList.toggle('dark')
        home.classList.toggle('darkCircleBg')
        wave.src = './image/waveDark.svg'
        homeImg.src = './image/homme-monnaieNB.png'
        document.title = 'MONNAYEUR 🌚'
    }
}
