import React from "react"
import "../pagesHeader/pagesHeader.css"
import PagesLeftAside from "../leftAside/PagesLeftAside"
import PagesCarousel from "../carousel/PagesCarousel"


const PagesHeader = () => {
    return (
        <div className="header">
            <div className="pages_header_content">
                <PagesLeftAside />
                <PagesCarousel />
            </div>
        </div>
    )
}
export default PagesHeader