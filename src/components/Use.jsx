import { BiBadgeCheck, BiCheckDouble } from "react-icons/bi"

export default function Use() {
  return (
    <div>
      <div className="title-center">
        <span>công dụng</span>
      </div>

      <div className="grid">
        <div className="row m-d-block">
          <div className="col-use">
            <div className="use-card">
              <div className="use-card-title">công dụng</div>
              <div className="use-card-content">
                <span>
                  Bộ Sản phẩm chuyên biệt được nghiên cứu xua tan viêm da cơ địa
                  bằng các thảo dược thiên nhiên. Hiệu quả đã được chứng minh
                  thực tế.
                </span>

                <ul>
                  <li>
                    <BiBadgeCheck />
                    Hỗ trợ cải thiện các vấn đề về da liễu
                  </li>
                  <li>
                    <BiBadgeCheck />
                    Viêm da cơ địa, mẩn ngứa, nổi mề đay
                  </li>
                  <li>
                    <BiBadgeCheck />
                    Vẩy nến, á sừng, chàm, nấm, mụn nhọt
                  </li>
                  <li>
                    <BiBadgeCheck />
                    Phục hồi làn da tổn thương do da liễu
                  </li>
                  <li>
                    <BiBadgeCheck />
                    Dưỡng da giúp da mềm mại sáng mịn
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-why-choose">
            <span>Tại sao chọn chúng tôi</span>
            <div className="why-choose-list-image">
              <img src={require(`../assets/images/soap-brown.jpg`)} alt="" />
              <img src={require(`../assets/images/soap-green.jpg`)} alt="" />
              <img src={require(`../assets/images/soap-pink.jpg`)} alt="" />
            </div>
            <ul>
              <li>
                <BiCheckDouble />
                Điều chế từ các thảo dược tự nhiên có tác dụng hỗ trợ các vấn đề
                da liễu
              </li>
              <li>
                <BiCheckDouble />
                Không gây kích ứng, sử dụng được cho hầu hết các tình trạng da
                kể cả mẩn đỏ, bong tróc
              </li>
              <li>
                <BiCheckDouble />
                Bào chế trên dây truyền máy móc hiện đại đạt tiêu chuẩn GMP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
