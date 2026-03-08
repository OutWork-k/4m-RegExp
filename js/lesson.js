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