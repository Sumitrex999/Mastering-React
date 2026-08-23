import { useState } from "react";

const App = () => {
  const [product, setProduct] = useState({
    name:"Laptop",
    price:35000,
    stock:10,
  });
  const changeName = ()=>(setProduct({
    ...product,
    name:"Computer"
  }));
  const increasePrice = ()=>{
    setProduct((prevProduct)=>{
      return{
        ...prevProduct,
        price:prevProduct.price + 1000,
      }
    })
  }
  const decreaseStock = ()=>{
    setProduct((prevProduct)=>({
      ...prevProduct,
      stock: prevProduct.stock - 1,
    }))
  }
  return (
    <div>
      <p onClick={changeName}>{product.name} </p>
      <p onClick={increasePrice}>{product.price} </p>
      <p onClick={decreaseStock}>{product.stock} </p>
    </div>
  )
}

export default App
