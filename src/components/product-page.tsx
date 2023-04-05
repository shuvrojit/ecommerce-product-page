import { useState } from "react"
import Description from "./description"
import ImageSlider from "./image-slider"
import product1 from "/images/image-product-1.jpg"
import product2 from "/images/image-product-2.jpg"
import product3 from "/images/image-product-3.jpg"
import product4 from "/images/image-product-4.jpg"
import cartImage from "/images/icon-cart.svg"
import minus from "/images/icon-minus.svg"
import plus from "/images/icon-plus.svg"

const ProductData = {
  brand : "sneaker company",
  description: "Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.",
  title: "Fall Limited Edition Sneakers",
  price: 250,
  discount: 50,
  images: [product1, product2, product3, product4],
  id: 23,
  count: 0
}

const cart = []

const ProductPage = () => {
  const [count, setCount] = useState(0)

  async function addCounter() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  async function subCounter() {
    if (count >= 0) {
      setCount(count + 1)
    }
  }

  async function addToCart() {
    ProductData.count = count;
    cart.push(ProductData)
  }

  return (
    <div className="product-container">
      <ImageSlider images={ProductData.images} />
      <div className="cart">
      <Description
    brand={ProductData.brand}
        title={ProductData.title}
        description={ProductData.description}
        price={ProductData.price}
        discount={ProductData.discount}
      />
      <div className="add-items" >
      <div className="cart-items" >
        <img onClick={addCounter} src={minus} />
        <p>{count}</p>
        <img onClick={subCounter} src={plus} />
      </div>

      <div className="addToCart" >
      <button onClick={addToCart}><img src={cartImage} /> <p>Add to Cart</p> </button>
      </div>
      </div>
      </div>
    </div>
  )
}

export {cart}
export default ProductPage
