import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox"> 
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">DESCRIPTION</div>
            <div className="descriptionbox-nav-box fade">REVIEWS (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that enables consumers to buy and sell products conveniently from anywhere at any time. Our platform offers a seamless shopping experience with a wide range of clothing options for men, women, and kids. From trendy casual wear to elegant formal attire, our collection caters to diverse tastes and styles. Each garment is crafted from high-quality, breathable, and durable fabrics, ensuring a perfect fit and lasting comfort. Enjoy hassle-free shopping with detailed product descriptions, secure payment options, and reliable delivery services. Redefine your style effortlessly with our exclusive clothing range, designed to make every occasion special.</p>
            <p>It displays products, prices, descriptions, and images, helping customers make informed purchase decisions easily and quickly.</p>
        </div>
        </div>
    )
}

export default DescriptionBox