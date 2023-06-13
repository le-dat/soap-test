import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={require(`../assets/images/logo.png`)} alt="" />
        </div>
        <div className="footer-info">
          <h1>CÔNG TY TNHH XNK MTV KIM HOÀNG VIỆT NAM</h1>
          <div className="footer-info-card">
            <div className="footer-info-card-left">
              <p>
                Địa chỉ: 100 Thiên Phước, P.9, Tân Bình, TP.HCM
                <br />
                Đại diện văn phòng: 1E Cư Xá Phú Bình, Lạc Long Quân, Phường 5,
                Quận 11, TPHCM
                <br />
                Điện thoại: 0918.590.505 ( Ms.Xuyến )<br />
                Email: kimhoangvn2022@gmail.com
              </p>
            </div>
            <div className="footer-info-card-right">
              <p>
                Website: kimhoang.group hoặc xaphongkingstrait.com
                <br />
                Facebook: facebook.com/xabongthaoduockimhoang
                <br />
                Website: kimhoang.group hoặc xaphongkingstrait.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="footer-link">
        <li>
          <a href="https://www.facebook.com/xabongthaoduockimhoang" alt="">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="www.tiktok.com/@kimhoangvn" alt="">
            <FaTiktok />
          </a>
        </li>
        <li>
          <a href="www.youtube.com/@kimhoangvn" alt="">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  )
}
