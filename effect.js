$('.single-item').slick({
    arrows:false,
    autoplay:false,
    autoplaySpeed:1000,
    fade:true,
    infinite: true,
});



window.addEventListener("scroll",function()
{
    var header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY >0)
})








