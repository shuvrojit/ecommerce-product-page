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



const ProductPage = () => {
  const [count, setCount] = useState(0)
  const images = [product1, product2, product3, product4]

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

  return (
    <div>
      <ImageSlider images={images} />
      <Description
        brand="SNEAKER COMPANY"
        title="Fall Limited Edition Sneakers"
        description="Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede."
        price="250"
        discount="50"
      />

      <div className="cart" >
      <img onClick={addCounter} src={minus}/>
        <p>{count}</p>
        <img onClick={subCounter} src={plus}/>
      </div>
      <div className="addToCart" >
      <button><img src={cartImage}/> <p>Add to Cart</p> </button>
      </div>
    </div>
  )
}

export default ProductPage
