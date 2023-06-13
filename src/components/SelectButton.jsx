import React from "react"

const SelectButton = ({ active, disabled, text, onClick, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`p-3 rounded-md text-center hover:opacity-75 border border-transparent hover:border-black 
        ${active ? "border-black " : ""}
        ${color ? " text-white" : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SelectButton
