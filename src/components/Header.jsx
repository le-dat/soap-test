import React from "react"
import logo from "../logoxabong.png"

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="text-gray-600 body-font header  ">
          <div className="container mx-auto align-center">
            <div className="flex flex-wrap flex-col md:flex-row items-center gap-3">
              <a className=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="text-xl pt-3 fs-10">
                  Xà Bông Thảo Dược Kim Hoàng
                </span>
              </a>
              <nav className="fs-10 md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">
                  <i className="fa-solid fa-phone"></i>: 0918.590.505 ( Ms.Xuyến
                  )
                </a>
                <a className="mr-5 hover:text-gray-900">
                  <i className="fa-brands fa-facebook p-2"> </i>
                  https://www.facebook.com/xabongthaoduockimhoang
                </a>
              </nav>
            </div>
          </div>
        </header>
        <nav className="navbar bg-green-800">
          <div className="header-circle">
            <span>
              <img src={logo} alt="logo" />
            </span>
          </div>
          <div className="container">
            <a className="navbar-brand flex w-full justify-center    " href="#">
              <img
                src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.15752-9/349699734_797807265247928_7737764925893650112_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hGCc9YMfbm4AX8qTy-7&_nc_ht=scontent.fsgn1-1.fna&oh=03_AdTld-L_1Gs1p49sDWm9TcjJnxMJSCpMck7uv5M5gCmomQ&oe=64ACD0E1"
                alt="Bootstrap"
                width={50}
                height={24}
              />
            </a>
            {/* <div className='navbar-brand flex w-full justify-between  items-center gap-5 p-4 text-2xl font-semibold text-gray-300  flex-row     ' >
                  <a className='hover:border-b-4 header-link' href="#">Sản phẩm</a>
                  <a className='hover:border-b-4 header-link' href="">Các vấn đề da</a>
                  <a className='hover:border-b-4 header-link' href="#">Công dụng</a>
                  <a className='hover:border-b-4 header-link' href="">Đối tượng sử dụng</a>
                  <a className='hover:border-b-4 header-link' href="#">Feedback</a>
                  <a className='hover:border-b-4 header-link' href=""><i class="fa-solid fa-cart-shopping"></i></a>
              </div> */}
            <div className="navbar-header">
              <a href="#" className="hover:border-b-4 navbar-link">
                Sản phẩm
              </a>
              <a href="#" className="hover:border-b-4 navbar-link">
                Các vấn đề da
              </a>
              <a href="#" className="hover:border-b-4 navbar-link">
                Công dụng
              </a>
              <a href="#" className="hover:border-b-4 navbar-link">
                Đối tượng sử dụng
              </a>
              <a href="#" className="hover:border-b-4 navbar-link">
                Feedback
              </a>
              <a href="#" className="hover:border-b-4 navbar-link">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
