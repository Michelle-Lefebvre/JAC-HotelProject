 /* jQuery is ready */
 $(document).ready(function(){
    //initiallize slick
    $('.slider').slick({
        slidesToShow:3,
        responsive:[
            {//large breakpoint
                breakpoint: 992,
                settings:{
                    slidesToShow:2
                }
            },
            {//small breakpoint
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    dots: true
                }
            },
        ]
    });
})