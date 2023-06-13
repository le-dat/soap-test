import React from "react"
import { Container } from "react-bootstrap"
import Header from "../components/Header"
import { Footer } from "antd/es/layout/layout"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>404 - Trang không tồn tại</div>
        <Link to={"/"}>Quay về trang chủ</Link>
      </Container>
      <Footer />
    </div>
  )
}

export default NotFound
