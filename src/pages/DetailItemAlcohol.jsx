import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

import CarouselCard from "../components/CarouselCard"
import PartDetail from "../components/PartDetail"
import RelativeItem from "../components/RelativeItem"
import SideDetail from "../components/SideDetail"
import { LIST_ALCOHOL, LIST_SOAP } from "../constants"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DetailItemAlcohol = () => {
  const { id } = useParams()
  const item = LIST_ALCOHOL.find((item) => item.id === id)
  const relativeItem = [
    ...LIST_ALCOHOL.filter((item) => item.id !== id),
    ...LIST_SOAP,
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      <Header />
      <Container className="bg-white my-10">
        <Row className="relative">
          <Col xs={12} md={6} lg={6} className="md:sticky md:top-14">
            <CarouselCard data={item.images} />
          </Col>

          <Col xs={12} md={6} lg={6} className="py-4 md:py-0 px-6 border">
            <SideDetail item={item} urlId={id} listSelect={LIST_ALCOHOL} />
            <PartDetail
              title={"🥒THÀNH PHẦN:"}
              listContent={item?.ingredients}
            />
            <PartDetail title={"❤ CÔNG DỤNG:"} listContent={item?.usage} />
            <PartDetail title={"💁🏼‍♀️CÁCH DÙNG:"} listContent={item?.use} />
          </Col>
        </Row>

        <RelativeItem list={relativeItem} />
      </Container>
      <Footer />
    </>
  )
}

export default DetailItemAlcohol
