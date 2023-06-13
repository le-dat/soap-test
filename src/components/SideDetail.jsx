import React from "react"
import { useNavigate } from "react-router-dom"

import { format_price_vn, url_path } from "../utils"
import SelectButton from "./SelectButton"

const SideDetail = ({ item, urlId, listSelect }) => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(url_path(id))
  }

  return (
    <div>
      <h1 className="text-xl md:text-4xl font-bold">{item.name}</h1>
      <div className="text-5xl mt-2 py-4 px-4 bg-gray-50 flex items-center gap-3">
        <span className="line-through text-gray-300">
          {format_price_vn(item.origin_price)}
        </span>
        <span className="text-red-500">{format_price_vn(item.price)}</span>
      </div>
      <div className="mt-4 flex gap-3 flex-wrap">
        {listSelect.map((item, index) => {
          return (
            <SelectButton
              key={index}
              active={item?.id === urlId}
              onClick={() => handleClick(item.id)}
              text={item?.type?.name}
              color={item?.color}
            />
          )
        })}
      </div>

      <div className="mt-4">{item?.type?.description}</div>
    </div>
  )
}

export default SideDetail
