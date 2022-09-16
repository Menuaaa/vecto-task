import React from "react";
import "../carousel/pagesCarousel.css"
import { ImagesArray } from '../../constants/constants'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedTitleImage from "../../assets/FeaturedTitleImage.png"
import { AiFillCaretRight } from "react-icons/ai"
import Data from '../../data.json'
import { useState } from "react";
import { useEffect } from "react";


const PagesCarousel = () => {
    const [state, setState] = useState('')
    const [activeStatus, setActiveStatus] = useState(false)
    const SendID =  (id)  => {
        const DataEach = Data.TendingNow.filter((element, index) => element.Id == id)
        setState(DataEach[0])

        
        setTimeout(() => {
            setActiveStatus(!activeStatus)
        }, 2000);

        setTimeout(() => {
            setActiveStatus(false)
        }, 8000);
    }

useEffect(()=>{ 
    const temp = localStorage.getItem("id") 
    const loadedTodos = JSON.parse(temp) 
    if(loadedTodos){ 
        setState(loadedTodos) 
    } 
},[]) 


useEffect(()=>{ 
const temp = JSON.stringify(state) 
localStorage.setItem("id",temp) 
},[state]) 



    return (
        <>
            {activeStatus ? <video controls autoPlay>
                <source src={state.VideoUrl} type="video/mp4" />
            </video> : <div className="header_menu">
                <div className="header_back_img_title">
                    <span>{state === '' ? "Movie" : state.Category}</span>
                    <img className="header_img" src={FeaturedTitleImage} alt="..." />
                    <span>{state === "" ? "2021 18+ 1h48m" : state.ReleaseYear + " " + state.MpaRating + "  " + state.Duration + "s"}</span>
                    <span> {state === "" ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" : state.Description} </span>
                    <div className="header_btn_section">
                        <button className="header_play_btn"><AiFillCaretRight /> play</button>
                        <button className="header_more_info_btn">more info</button>
                    </div>
                </div>
                <div className="carusel" >
                    <div className="carusel_content">

                        <Swiper slidesPerView={8} pagination={{ clickable: true }} className="mySwiper">
                            <div className="carusel_content">
                                {ImagesArray.map((element, index) => {
                                    return (
                                        <SwiperSlide>
                                            <img src={element.img} onClick={() => SendID(element.Id)} className="carousel_image" key={index} />
                                        </SwiperSlide>
                                    )
                                })}
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>}
        </>

    )
}

export default PagesCarousel