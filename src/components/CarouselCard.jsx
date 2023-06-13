import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { image_path } from "../utils"

const ProductDetailsCarousel = ({ data }) => {
  return (
    <div className="sticky top-10">
      <Carousel
        className="productCarousel"
        autoPlay
        infiniteLoop
        thumbWidth={60}
        showIndicators={false}
        showStatus={false}
      >
        {data.map((item, index) => (
          <div key={`product-details-carousel-${index}`}>
            <img
              src={image_path(item)}
              alt={`product-details-carousel-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
