import { useState } from "react"
import prev from "/images/icon-previous.svg"
import next from "/images/icon-next.svg"

const ImageSlider = ({images}) => {
  const [image, setImage] = useState(0)

  async function leftImage() {
    if (image > 0) {
      setImage(image - 1)
    }
  }

  async function rightImage() {
    if (image < images.length - 1) {
      setImage(image + 1)
    }
  }

  return (
    <div className="image-slider" >
      <img src={images[image]} alt="product" />
      <div className="slider-nav" >
      <button onClick={leftImage}>
      <img src={prev} />
      </button>
      <button onClick={rightImage}>
      <img src={next} />
      </button>
      </div>
    </div>
  )
}

export default ImageSlider
