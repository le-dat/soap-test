import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import { ImageFeedbackData } from "./Data"

export default function Feedbacks() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      setImages(ImageFeedbackData)
    }
    fetchProduct()
  }, [images])

  const slideLeft = () => {
    var slider = document.getElementById("slider")

    slider.scrollLeft = slider.scrollLeft - 735
  }

  const slideRight = (event) => {
    var slider = document.getElementById("slider")

    slider.scrollLeft = slider.scrollLeft + 735
  }
  return (
    <>
      <div className="title-center">
        <span>feedback</span>
      </div>
      <div className="grid">
        <div className="row">
          <div className="col h-100">
            <div className="feedback-title">Hiệu quả</div>
            <div className="feedback-img">
              <img src={require(`../assets/images/img-fb.jpg`)} alt="" />
              <div className="feedback-img-content">
                <span>Ribi Sachi</span>
                <p>
                  Tôi từng bị nấm ở khắp vùng tay. Mỗi khi trở trời, hay ăn đồ
                  ăn hải sản là tôi lại bị mẩn ngứa, gãi nhiều lắm. Đã tìm nhiều
                  loại sản phẩm và nhiều nơi nhưng không kết quả. May mắn nhờ
                  biết đến sản phẩm DALI Pro, Tôi đã kiên trì sử dụng một thời
                  gian và giờ tôi cũng đã yên tâm nhiều lắm rồi. Cảm ơn sản phẩm
                  đã giúp tôi chiến thắng cái nấm da này
                </p>
              </div>
            </div>
          </div>

          <div className="feedback-slider">
            <div className="feedback-title">Hình ảnh thực tế</div>
            <div className="feedback-slider-btn pre" onClick={slideLeft}>
              <AiOutlineLeft />
            </div>
            <div className="feedback-slider-btn next" onClick={slideRight}>
              <AiOutlineRight />
            </div>
            <div className="feedback-slider-list" id="slider">
              {images.map((img) => (
                <div className="feedback-slider-item">
                  <img
                    src={require(`../assets/images/${img.image}`)}
                    alt=""
                    className="aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
