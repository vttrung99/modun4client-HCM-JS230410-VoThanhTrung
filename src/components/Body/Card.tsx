import React from 'react'
import {Product} from './Body'
export default function Card(props: {product: Product}) {
  // console.log("🚀 ~ file: Card.tsx:4 ~ Card ~ props:", props)
  return (
    <div  >
      <div className="card">
        <img style={{width:'100%',height:'200px'}}
          src={props.product.avatar}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body" style={{height:'100px'}}>
          <h5 className="card-title">Price: {props.product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
          <p className="card-title">
          {props?.product.name}
          </p>
         
        </div>
        <a href={`/cart/${props.product.id}`}  className="btn btn-primary" style={{marginBottom:'30px'}}>
            Tuỳ chọn
          </a>
      </div>
     
    </div>
  )
}
// props: {product: Product}
