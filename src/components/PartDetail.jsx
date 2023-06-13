import React from "react"

const PartDetail = ({ title, listContent = [] }) => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-semibold w-full p-3 bg-gray-50 text-uppercase">
        {title}
      </h2>
      <ul className="mt-2 pl-3">
        {listContent.map((item, index) => (
          <li key={index} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PartDetail
