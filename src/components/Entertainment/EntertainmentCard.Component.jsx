import React from 'react'
import Slider from 'react-slick';
const EntertainmentCard = (props) => {
    return (
        <>
            <div className='w-full h-30 px-2'>
            <img className='w-full h-full rounded-xl' src={props.src} alt='entertainmentImage'/> 
            </div>
        </>
    )
}
const EntertainmentCardSlider = () => {
    const EntertainmentImage =[
        "https://in.bmscdn.com/promotions/cms/creatives/1630993174880_rannutsavpromotionalbanners_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630987289598_seetimaarr_incinemasthisfridayknowmore_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    
    ];
    const settings = {
        infinite:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:
        [
            {
                breakpoints:1024,
                settings:
                {
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite:true,
                },
            },
        
        {
            breakpoints:600,
            settings:
            {
                slidesToShow:3,
                slidesToScroll:1,
                InitialSlide:1
            },
        },
        {
            breakpoints:480,
            settings:
            {
                slidesToShow:2,
                slidesToScroll:1
                
            },
        },
    ]
    }
    return(<>
     <slider {...settings}>
         {
             EntertainmentImage.map((image) => (
                 <EntertainmentCard src={image}/>
             ))
         }
     </slider>
    </>)
}


export default EntertainmentCardSlider;
