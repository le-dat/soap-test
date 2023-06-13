import images from "../assets"

export const image_path = (image) => {
  return image.startsWith("alcohol")
    ? images.alcohol[image]
    : images.soap[image]
}

export const url_path = (id) => {
  return id.startsWith("alcohol") ? `/item/alcohol/${id}` : `/item/soap/${id}`
}

export const format_price_vn = (price = 0) => {
  return price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })
}
