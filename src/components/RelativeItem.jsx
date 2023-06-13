import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CardItem from "./CardItem"

const RelativeItem = ({ list = [] }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="relative z-0 my-[4rem] lg:mt-[8rem] border p-4 ">
      <div className="text-4xl font-semibold mb-5">Sản phẩm tương tự</div>
      <Carousel
        responsive={responsive}
        autoPlay
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {list?.map((item, index) => (
          <CardItem key={`relative-item-${item.id}-${index}`} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default RelativeItem
