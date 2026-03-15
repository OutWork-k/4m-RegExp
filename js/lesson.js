const tabs = document.querySelectorAll(".tab_content_block")
const tabBtns = document.querySelectorAll(".tab_content_item")
const tabBtnsParent = document.querySelector(".tab_content_items")

const HideTabs = () => {
    tabs.forEach((tab) => {
        tab.style.display = "none"
        tabBtns.forEach((btn) => {
        btn.classList.remove("tab_content_item_active")
        })
    })
}


 const showActiveTab = (index = 0) => {
    tabs[index].style.display = "block"
    tabBtns[index].classList.add("tab_content_item_active")
} 


HideTabs()
showActiveTab()

tabBtnsParent.addEventListener("click", (event) => {
    if(event.target.tagName.toLowerCase() == "button") {
        tabBtns.forEach((btn, index) => {
        if(event.target == btn) {
        HideTabs()
        showActiveTab(index)
        }
    })
    }
})

let currentIndex = 0
showActiveTab(currentIndex);
setInterval(() => {
    currentIndex++;
    if (currentIndex >= tabs.length) {
        currentIndex = 0;
    }
    HideTabs()
    showActiveTab(currentIndex);
}, 5000);

tabBtnsParent.addEventListener("click", (event) => {
    if(event.target.tagName.toLowerCase() == "button") {
        tabBtns.forEach((btn, index) => {
            if(event.target == btn) {
                HideTabs()
                showActiveTab(index)
                currentIndex = index 
            } // честно я думал это будет легче чем я думал я чуть в инете посмотрел ничего не нашел, смотрю на код а у меня перед глазами было решение
        })
    }
})


const usdInput = document.querySelector("#usd")
const somInput = document.querySelector("#som")
const eurInput = document.querySelector("#eur")
const errorMessage = document.querySelector("#error")

const converter = (targetEl, otherEl, thirdEl) => {
    targetEl.addEventListener("input",() => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader('Content-type','application/json');
    request.send();
    request.onload = () => {
        if (request.status === 404) {
            errorMessage.style.color ="red"
            errorMessage.innerHTML = "Произошла не предвиденная ошибка"
        }
        const response = JSON.parse(request.response);
        const usd = response?.usd;
        const eur = response?.eur;

        if(targetEl.value === "") {
            otherEl.value = "";
            thirdEl.value = "";
            return;
        }
        if (targetEl.id === "som") {
            otherEl.value = (targetEl.value / usd).toFixed(2);
            thirdEl.value = (targetEl.value / eur).toFixed(2);
        } 
        else if (targetEl.id === "usd") {
            otherEl.value = (targetEl.value * usd).toFixed(2);
            thirdEl.value = ((targetEl.value * usd) / eur).toFixed(2);
        } 
        else if (targetEl.id === "eur") {
            otherEl.value = (targetEl.value * eur).toFixed(2);
            thirdEl.value = ((targetEl.value * eur) / usd).toFixed(2);
        }
    }
    })
}
converter(usdInput, somInput, eurInput)
converter(somInput, usdInput, eurInput)
converter(eurInput, somInput, usdInput)