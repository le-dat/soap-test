import { useEffect, useState } from "react"
import { SoapsData } from "./Data"
import { Link } from "react-router-dom"
import CardItem from "./CardItem"
import { LIST_SOAP } from "../constants"

function Product() {
  const [soaps, setSoaps] = useState([])

  useEffect(() => {
    const fetch = async () => {
      setSoaps(LIST_SOAP)
    }
    fetch()
  }, [soaps])

  return (
    <div>
      <div className="title-center">
        <span>sản phẩm</span>
      </div>
      <div className="grid">
        <div className="row">
          {soaps.map((product, index) => (
            <div className="col">
              {/* <Link to={`/item/soap/${product.id}`}>
                <div className="product-item">
                  <div className="product-item-image">
                    <img
                      src={require(`../assets/images/${product.image}`)}
                      alt=""
                      className="product-item-image"
                    />
                  </div>
                  <div className="product-item-content">
                    <p>{product.name}</p>
                    <p>
                      {Number(product.priceOld)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      <span>VND</span>
                    </p>
                    <p>
                      {Number(product.price)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      <span>VND</span>
                    </p>
                  </div>
                  <div className="product-tag">
                    <span> {product.discount}%</span>
                  </div>
                </div>
              </Link> */}

              <CardItem key={`${product.id}-${index}`} item={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
