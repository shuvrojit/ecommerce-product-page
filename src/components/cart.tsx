import { cart } from "./product-page"
import iconDelete from "/images/icon-delete.svg"

const Cart = () => {

  return (
    <div className="nav-cart">

      <h3>Cart</h3>
      {cart.length > 0 ?
        <div className="nav-cart-items">
          {cart.map((p, i) => {
            return <div className="cart-item" key={i}>
              <img src={p.images[0]} />
              <div className="single-item">
              <p>{p.title}</p>
              <p>${((p.price * p.discount) / 100).toFixed(2)} x {p.count} <b>${(((p.price * p.discount) / 100) * p.count).toFixed(2)}</b></p>
              </div>
              <img id="icon-dl" src={iconDelete} />

              </div>
          })}


        <button>Checkout</button>
        </div>
        :
        <div className="nav-cart-items">
          <p>Your cart is empty</p>
        </div>
      }
    </div>
  )
}

export default Cart
