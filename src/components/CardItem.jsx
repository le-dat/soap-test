import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import { format_price_vn, image_path, url_path } from "../utils"

const CardItem = ({ item }) => {
  return (
    <Link to={url_path(item.id)}>
      <Card>
        <Card.Img
          variant="top"
          src={image_path(item?.images[0])}
          className="aspect-[12/8] overflow-hidden object-cover"
        />
        <Card.Body>
          <div className="font-medium md:text-2xl lg:text-3xl">
            {item?.name}
          </div>
          <Card.Text className="mt-3">
            <div className="text-3xl line-through text-gray-400 my-1">
              {format_price_vn(item?.origin_price)}
            </div>
            <div className="text-3xl text-red-600">
              {format_price_vn(item?.price)}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CardItem
