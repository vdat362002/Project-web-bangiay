// -------------------- Menu - item ---------------------

const toP = document.querySelector(".top")

window.addEventListener("scroll", function() {
    const X = this.pageYOffset;
    if(X > 1)
    {
        toP.classList.add("active")
    }
    else {
        toP.classList.remove("active")
    }
})

//  ------------------- Menu- Slider - Cartegory --------------------------------

const itemSliderbar = document.querySelectorAll(".cartegory-left-li")
itemSliderbar.forEach(function (menu, index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})