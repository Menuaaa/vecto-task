import React from "react";
import "../leftAside/pagesLeftAside.css"
import search from "../../icons/search.png"
import home from "../../icons/home.png"
import movie from "../../icons/movie.png"
import screen from "../../icons/screen.png"
import mask from "../../icons/mask.png"
import timeBack from '../../icons/timeBack.png'
import daniel1 from "../../assets/daniel1.jpg"


const PagesLeftAside = () => {
    return (
        <div className="left">
            <div className="left_aside_menu">
                <div className="user">
                    <img className="user_img" src={daniel1} alt="" />
                    <span className="user_name">daniel</span>

                </div>
                <div className="icons_parent">
                    <div className="icons_div">
                        <img src={search} alt="..." />
                        <span>search</span>
                    </div>

                    <div className="icons_div">
                        <img src={home} alt="..." />
                        <span>home</span>

                    </div>

                    <div className="icons_div">
                        <img src={movie} alt="..." />
                        <span>tv shows</span>

                    </div>

                    <div className="icons_div">
                        <img src={screen} alt="..." />
                        <span>movies</span>

                    </div>

                    <div className="icons_div">
                        <img src={mask} alt="..." />
                        <span>genres</span>

                    </div>

                    <div className="icons_div">
                        <img src={timeBack} alt="..." />
                        <span>watch later</span>

                    </div>

                </div>


                <div className="menu_footer">
                    <span>language</span>
                    <span>get help</span>
                    <span>exit</span>

                </div>

            </div>




        </div>
    )
}
export default PagesLeftAside