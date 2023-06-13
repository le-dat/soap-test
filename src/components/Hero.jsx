import React from "react"
import skin from "../assets/skin.jpg"
import skin1 from "../assets/skin1.jpg"
import problemskin1 from "../assets/images/vdvd1.jpg"
import problemskin2 from "../assets/images/vdvd2.jpg"
import problemskin3 from "../assets/images/vdvd3.jpg"
import problemskin4 from "../assets/images/vdvd4.jpg"
import { MdOutlineReportProblem } from "react-icons/md"
import { FaCaretRight } from "react-icons/fa"

const Hero = () => {
  return (
    <div>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img
                src="https://f10-zpc.zdn.vn/3201430432613770286/293a0ffd5bef8ab1d3fe.jpg"
                className="d-block w-full "
                alt="..."
              />
            </div>
          </div>
        </div>
        <br />

        <section className="text-gray-600 body-font w-clear ">
          <div className="title-center">
            <span>về chúng tôi</span>
          </div>
          <div className="container mx-auto flex flex-col px-5 py-5  justify-center items-center   ">
            <div className="w-full flex flex-col items-center text-center ">
              <div className="w-100 font-bold px-4 mb-5 text-gray-500 pt-6  text-lg font-medium">
                <p className="mx-4 text-3xl xl:px-32 xl:text">
                  TIỆN ÍCH VÀ CHẤT LƯỢNG TUYỆT VỜI CỦA XÀ BÔNG THẢO DƯỢC KIM
                  HOÀNG ✍️
                </p>
                <br />
                <p className="mx-4 text-2xl xl:px-36 ">
                  ✨ Xà bông thảo dược Kim Hoàng là một sản phẩm ưu việt trong
                  lĩnh vực chăm sóc da với những ưu điểm vượt trội về tiện ích
                  và chất lượng. Kết hợp từ các thành phần thảo dược thiên
                  nhiên, sản phẩm này sẽ mang lại sự cải thiện đáng kể cho làn
                  da của bạn.
                </p>
                <br />
                <p className="mx-4 text-2xl xl:px-36">
                  ✨ Đa dạng công dụng: Xà bông thảo dược Kim Hoàng không chỉ là
                  một sản phẩm tắm rửa thông thường, mà còn có khả năng hỗ trợ
                  trong việc điều trị nhiều vấn đề về da. Từ việc giảm mụn nhọt,
                  mụn trứng cá, thâm, nám, ghẻ lở, viêm da cơ địa cho đến dị
                  ứng, tẩy trang và dễ dàng mang theo khi đi du lịch. Sản phẩm
                  này được thiết kế để đáp ứng nhiều nhu cầu khác nhau của da.
                </p>
              </div>

              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Gửi Email Về Cho Chúng Tôi
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="title-center">
          <span>các vấn đề về da</span>
        </div>
        <div className="grid">
          <div className="flex problem-skin-card">
            <img alt="hero" src={skin} />
            <ul>
              <li>
                {" "}
                <MdOutlineReportProblem /> Viêm da cơ địa, vẩy nến, á sừng
              </li>
              <li>
                {" "}
                <MdOutlineReportProblem /> Lang ben, tổ đỉa, chàm, nấm, hắc lào
              </li>
              <li>
                {" "}
                <MdOutlineReportProblem /> Nấm da đầu, nấm móng tay chân
              </li>
              <li>
                {" "}
                <MdOutlineReportProblem /> Ghẻ, viêm nang lông, viêm bã nhờn
              </li>
              <li>
                {" "}
                <MdOutlineReportProblem /> Dị ứng, mẩn ngứa, nổi mề đa
              </li>
            </ul>
          </div>

          <div className="feedback-title">Vấn đề của người việt</div>
          <div className="flex problem-skin-card">
            <img alt="hero" src={skin1} className="" />
            <p className="p-6 text-3xl">
              Viêm da là một vấn đề da liễu thường gặp. Viêm da thường xảy ra
              trên cơ địa dị ứng và gặp ở mọi lứa tuổi. Tuy không ảnh hưởng
              nhiều đến sinh hoạt hàng ngày nhưng viêm da làm bạn khá khó chịu
              vì da bị ngứa rát và mất thẩm mỹ.
            </p>
          </div>
          {/* <div className="problem-skin-vn">
            <div className="problem-skin-vn-card flex">
              <img alt="hero" src={skin1} className="" />
              <p>
                Viêm da là một vấn đề da liễu thường gặp. Viêm da thường xảy ra
                trên cơ địa dị ứng và gặp ở mọi lứa tuổi. Tuy không ảnh hưởng
                nhiều đến sinh hoạt hàng ngày nhưng viêm da làm bạn khá khó chịu
                vì da bị ngứa rát và mất thẩm mỹ.
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label
              htmlFor="hero-field"
              className="leading-7 text-sm text-gray-600"
            >
              Gửi Email Về Cho Chúng Tôi
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Gửi
          </button>
        </div>
      </div>

      {/* <><section className="text-gray-600 body-font w-clear ">
        <h2 className="text-center text-4xl font-bold p-5 w-full bg-slate-100  ">
            ____________________________________________ Vấn Đề Về Da
            ____________________________________________{" "}
        </h2>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={skin} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className=" text-left mx-5 p-4 text-2xl ">
                        <ul>
                            <li> 1. Viêm da cơ địa, vẩy nến, á sừng</li>
                            <li> 2. Lang ben, tổ đỉa, chàm, nấm, hắc lào</li>
                            <li> 3. Nấm da đầu, nấm móng tay chân</li>
                            <li> 4. Ghẻ, viêm nang lông, viêm bã nhờn</li>
                            <li> 5.Dị ứng, mẩn ngứa, nổi mề đa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <div>
            <div className="col-lg-6 col-sm-12">
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex flex-col px-5  justify-center items-center">
                            <h3 className="  text-2xl text-red-500 font-bold p-4">
                                Vấn Đề Của Người Việt{" "}
                            </h3>
                            <img
                                className="lg:w-3/6 md:w-2/6 w-5/6 mb-10 object-cover object-center rounded"
                                alt="hero"
                                src={skin1} />
                            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                                <p className="text-left text-lg font-semibold  leading-relaxed">
                                    Viêm da là một vấn đề da liễu thường gặp. Viêm da thường xảy
                                    ra trên cơ địa dị ứng và gặp ở mọi lứa tuổi. Tuy không ảnh
                                    hưởng nhiều đến sinh hoạt hàng ngày nhưng viêm da làm bạn
                                    khá khó chịu vì da bị ngứa rát và mất thẩm mỹ.
                                </p>
                                <div className="flex w-full justify-center items-end"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div></> */}
    </div>
  )
}

export default Hero
