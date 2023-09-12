import React, { useEffect, useState } from 'react'

import api from '@services/apis'

interface Product {
  avatar: string;
  name: string;
  price: number;
}
interface GuestReceiptDetail {
  quantity: number;
  product: Product
}







interface ProductList {
  email: string;
  phoneNumber: string;
  total: number;
  guestReceiptDetail: GuestReceiptDetail[]

}
// interface Product {
//   guestReceiptId: string;
//   id: string;
//   productId: string;
//   quantity: number;
// }

export default function Pay() {
  const [product, setProduct] = useState<ProductList[]>([])
  console.log("🚀 ~ file: Pay.tsx:14 ~ Pay ~ product:", product)
  // const cart :ProductList[] = []
  // async function name() {
  //   if (product?.length > 0) {
  //     for (let index = 0; index < product.length; index++) {
  //       const produscList = await api.productApi.finfindByProduct(product[index].productId)
  //         // .
  //         // then((res) => res.data.data);
  //         // cart.push({
  //         //   ...product[index],
  //         //   produscList,
  //         // });
  //       console.log("🚀 ~ file: Pay.tsx:21 ~ name ~ produscList:", produscList)
  //     }

  //   }
  // }

  useEffect(() => {
    async function getReceipt1() {
      let getReceiptResult = await api.purchaseApi.getReceipt();
      console.log("🚀 ~ file: Pay.tsx:44 ~ getReceipt1 ~ getReceiptResult:", getReceiptResult?.data?.data)
      setProduct(getReceiptResult?.data.data)
    }
    getReceipt1()
  }, [])
  // useEffect(() => {
  //   name() 
  // }, [product])



  return (
    <div>
      <div style={{ marginTop: '10px' }}>
        <div style={{
          display: 'grid', width: '1000px',
          gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        }}>

<div style={{display:'flex',flexWrap:"wrap" ,margin:'auto'}}>
{product.map((products) => (
            <div key={Math.random() * Date.now()} >
              <div>{products.email}</div>
              <div>Số điện thoại: {products.phoneNumber}</div>
              <div>Tổng tiền:{products.total}</div>
              <div style={{display:'flex'}}>
              {products?.guestReceiptDetail
                .map((productss) => (
                  <div className="card" key={Math.random()*Date.now()} style={{width:'200px'}}>
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" >
                      <img style={{ width: '100%', height: '200px' }}
                        src={productss.product.avatar}
                        className="img-fluid"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{productss.product.name}</h5>
                      <p className="card-text">
                      {/* {products.guestReceiptDetail} */}
                      </p>
                      Số Lượng:
                      <span  >
                        {productss.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
</div>
          


        </div>
      </div>


    </div>
  )
}
