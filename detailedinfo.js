let itemsdata = {
    item1:{
        title:"Chris Norton",
        Image:"WhatsApp Image 2026-07-15 at 18.01.37.jpeg",
        discription: "Chris Norton, a Maties Rugby hooker from 1991-2003, passed his passion for rugby to his son Riley, who now plays in the Varsity Cup squad. Their story reflects Stellenboschs deep rugby culture and family legacy.",
        facts:[
            "Chris toured internationally, playing in Argentina, Japan, and England.",
            "Riley balanced academics with high-performance rugby at Stellenbosch University",
            "Their bond shows how sport unites generations and builds comunilty identity",
        ],
        location: "Stellenbosch, Western Cape, South Africa",
        extra:"Collecting vintage rugby memorabilia, mentoring young players, and gardening."
    },
    item2:{
        title:"Dr. Aisha Mbeki",
        Image:"person2.webp",
        discription:"Grew up in Durban, South Africa, raised by a single mother who worked as a nurse. Inspired by coastal pollution she witnessed as a child, she pursued environmental science.",
        facts:[
            "she worries That her work wont make a tangible difference.",
            "has a Close bond with her younger brother, Sipho, who is a musician.",
            "Published research on sustainable farming in wine regions around Stellenbosch.",
        ],
        location: "Stellenbosch, Western Cape, South Africa ",
        extra:"Just as rugby families pass down traditions, Aisha sees herself as passing down ecological stewardship to the next generation."
    },
    item3:{
        title:"Daniel Jacobs",
        Image:"person3.webp",
        discription:"Born in Cape Town, raised in a bilingual household (Afrikaans and English). Studied computer science but left corporate work to pursue indie game development.",
        facts:[
            "He once presented at a Stellenbosch tech-and-sport innovation fair, blending his love for coding with rugby analytics.",
            "His indie game “Varsity Legends” is loosely inspired by South African student rugby culture.",
            "Best friend and collaborator, Thandi, who handles the art side of their projects.",
        ],
        location:"Cape Town, South Africa ",
        extra:"Like Riley Norton balancing academics and rugby, Danny balances creative coding with community mentorship."
    }
}
let detailimg = document.getElementById("detailImg")
let detailtitle = document.getElementById("detailTitle")
let detaildiscript = document.getElementById("detailScript")
let detailfacts = document.getElementById("detailFacts")
let detaillocation = document.getElementById("detailLocation")
let detailextra = document.getElementById("detailExtra")
let detailFavButton = document.getElementById("detailFavButton")

function showitemdetail(itemid) {
    let item = itemsdata[itemid]
    if (!item) return
    detailimg.src = item.Image
    detailimg.alt = item.title
    detailtitle.textContent = item.title
    detaildiscript.textContent = item.discription
    detaillocation.textContent = item.location
    detailextra.textContent = item.extra

    if (detailFavButton) {
        detailFavButton.dataset.title = item.title
        detailFavButton.dataset.image = item.Image
        detailFavButton.dataset.alt = item.title
        detailFavButton.textContent = "☆"
    }

    detailfacts.innerHTML = ""
    item.facts.forEach(fact => {
        let li = document.createElement("li")
        li.textContent = fact
        detailfacts.appendChild(li)
    })
}

let itemBttn = document.querySelectorAll(".itemlink")
itemBttn.forEach(button => {
    button.addEventListener("click", () => {
        let itemid = button.dataset.item
        showitemdetail(itemid)
    })
})
showitemdetail("item1")

        