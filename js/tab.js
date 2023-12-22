const tabsBtn = document.querySelectorAll('.main__award-item');
const tabItems = document.querySelectorAll('.main__award-image');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-id");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('visible')) {
            tabItems.forEach(function(item) {
                item.classList.remove('visible')
            })
    
            currentTab.classList.add('visible')

        }
    });
});

document.querySelector('.main__award-item').click();