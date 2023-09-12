import React, { useEffect, useState } from 'react';
import api from '@services/apis';
import { useParams } from 'react-router-dom'
import './carousel.scss'
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

interface productPictures {
  id: string;
  path: string;
  productId: string;
}
interface CartItem {
  productId: string;
  quantity: number;

}
interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  des: string;
  categoryId: string;
  productPictures: productPictures[];
}
export default function Kit() {
  const [countProduct, setCountProduct] = useState<number>(1)
  const [product, setProduct] = useState<Product | null>(null)
  const { id } = useParams();
  async function productHandle(id: string) {
    await api.productApi.finfindByProduct(id).then(res => {
      setProduct(res?.data.data)
    })
  }

  function snackbars() {
    var x = document.getElementById("snackbar") as HTMLBodyElement;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
  }
  useEffect(() => {
    productHandle(id ?? '0')
  }, [])

  function handleAddToCart(productId: string) {
    console.log("đã vào")
    let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
    if (carts.length == 0) {

      carts.push({
        productId,
        quantity: countProduct,
      })
    } else {
      // cart có sp
      let flag: boolean = false;
      carts = carts.map(item => {
        if (item.productId == productId) {
          item.quantity = countProduct + item.quantity
          flag = true;
        }
        return item
      })
      if (!flag) {
        carts.push({
          productId,
          quantity: countProduct
        })
      }
    }
    localStorage.setItem("carts", JSON.stringify(carts)) // save to local
    var x = document.getElementById("snackbar") as HTMLBodyElement;
    x.innerHTML = "Them giỏ hàng thành công"
    snackbars()
  }

  function handleInput(count:string){
    if(count==='tang'){
      setCountProduct(countProduct+1)
    }
    if(count==='giam'){
      if(countProduct<=1){
        setCountProduct(1)
        return
      }
      setCountProduct(countProduct-1)
    }
  }
  // function addNewProduct(){
  //   window
  // }
  useEffect(() => {
    console.log("product", product)
  }, [product])

  console.log("components bị rerender")
  return (
    <div >

      <div id="snackbar" style={{ backgroundColor: 'orange' ,position:"fixed",top:"10px",height:"50px",zIndex:"100000000",}}>Thêm giỏ hàng Thành công</div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  {/* <h1 onClick={()=>addNewProduct()}>Mua thêm</h1> */}
                  <a href="/">MUA THÊM</a>
                </div>
                <div className="card-body">
                  <div className="row">
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={product?.avatar}
                          className="w-100"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>


                        <strong>{product?.name}</strong>
                      </p>
                      <p style={{ color: 'blue', }}>Thông tin: <div>{product?.des}</div> </p>
                      <strong>{product?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>

                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
               
                      <>
                       
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                          >
                            <i className="fas fa-minus" onClick={()=>handleInput('giam')} />
                          </button>
                          <input
                            key={Math.random() * Date.now()}
                            id="form1"
                            style={{ width: '100px' }}
                            
                            name="quantity"
                            value={countProduct}
                           
                            type="number"
                            className="form-control form-control-sm"
                          />
                          <button
                            className="btn btn-link px-2"
                      
                          >
                            <i className="fas fa-plus" onClick={()=>handleInput('tang')} />
                          </button>
                        </div>
                      </>
                      <br/>
                        <div style={{width:'400px'}}>
                        {
                        product &&
                        <button style={{ backgroundColor: 'orange',width:'150px' }} className="form-label" onClick={() => {
                          handleAddToCart(product?.id)
                        }} >
                          Mua hàng</button>
                      }
                        </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    {/* <strong>Loại sản phẩm</strong> */}
                  </p>
                  <div style={{ display: 'flex' }}>
                    {product?.productPictures?.map((product) => (
                      <div style={{ width: '500px' }} key={Date.now() * Math.random()}>
                        <img style={{ width: '200px' }}
                          className="me-2"
                          width="45px"
                          src={product.path}
                          alt="Mastercard"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}






