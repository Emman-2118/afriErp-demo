const swiper = new Swiper(".slider-container",{
    effect: "slide",
    speed: 1000,
    autoplay: { delay: 5000},
    navigation: {
        prevEl: "#prev-btn",
        nextEl: "#next-btn"
    },
    reachEnd: ()=> swiper.autoplay.stop()

})