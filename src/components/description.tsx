
const Description = (props) => {
  return (
    <div className="description">
      <p id="brand-name">{props.brand}</p>
      <h1>{props.title}</h1>
      <p id="product-description">{props.description}</p>
      <div className="price-section" >

        <div className="discount">
          <p>${((props.price * props.discount) / 100).toFixed(2)}</p>
          <p id="discount-price">{props.discount}%</p>
        </div>
      <p><strike>${(props.price * 1).toFixed(2)}</strike></p>

      </div>
    </div>
  )
}
export default Description
