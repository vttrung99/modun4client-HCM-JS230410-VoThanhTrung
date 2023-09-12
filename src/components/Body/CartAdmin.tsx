import React, { useState, useEffect } from 'react'
import api from '@services/apis'

// import {Product} from './Body'
interface Product {
  id: string;
  des: string;
  avatar: string;
  name: string;
  price: number;
  categoryId: string;
  sell: boolean;

}
export default function Card(props: { product: Product }) {
  const [count, setCount] = useState(1)
  useEffect(() => {

  }, [count])
  const [products1, setProduct] = useState<Product[]>([]);

  function handDelete() {
    const productId = props.product.id;
    api.productApi.delete(productId)
      .then(res => {
        if (res.status) {
          alert(res.data.message);
          window.location.reload()
        }
      })
    setCount(count + 1);
  }
  return (
    <div  >
      <div className="card">
        <img style={{ width: '100%', height: '200px' }}
          src={props.product.avatar}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body" style={{ height: '100px' }}>
          <h5 className="card-title">Price: {props.product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
          <p className="card-title">
            {props?.product.name}
          </p>

        </div>
        <button className="btn btn-primary" onClick={() => (handDelete())} style={{ marginBottom: '30px' }}>
          {props?.product.sell?'Ngừng bán':'Sản phẩm đã ngừng bán'}
        </button>
      </div>

    </div>
  )
}
