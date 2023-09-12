
import React, { useState, useEffect } from 'react';
import api from '@services/apis';
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
  productPictures: {
    id: string;
    path: string;
  }[];
}
interface newGuestReceipt {
  email: string;
  phoneNumber: string;
  total: number;
  payMode: string;
}
interface CartItemDetail extends CartItem {
  productDetail: Product;
}
export default function Cart() {
  const [total, setTotal] = useState<number>(0)
  const [email, setEmail] = useState('92Thanhtrung@gmail.com')
  const [phone, setPhone] = useState('0973834662')
  const [cart, setCart] = useState<CartItemDetail[]>([]);
  async function formatCart() {
    console.log('vao formatCart');
    const carts: CartItem[] = JSON.parse(localStorage.getItem('carts') ?? '[]');
    const cartTemp: CartItemDetail[] = [];
    for (let i = 0; i < carts.length; i++) {
      const productDetail = await api.productApi
        .finfindByProduct(carts[i].productId)
        .then((res) => res.data.data);
      cartTemp.push({
        ...carts[i],
        productDetail,
      });
    }
    setCart(cartTemp);
  }
  function handleAddToCart(param: string, productId: string) {
    let carts: CartItem[] = JSON.parse(localStorage.getItem('carts') ?? '[]');
    if (param === 'tang') {
      carts = carts.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else if (param === 'giam') {
      carts = carts.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    } else {
      carts = carts.filter((item) => item.productId !== productId);
    }
    localStorage.setItem('carts', JSON.stringify(carts));
    formatCart();
  }
  useEffect(() => {
    let carts: CartItem[] = JSON.parse(localStorage.getItem('carts') ?? '[]');
    let totals: number = 0
    if (cart.length != 0) {
      console.log("🚀 ~ file: Cart.tsx:79 ~ useEffect ~ cart.length:", cart.length)
      for (let index = 0; index < cart.length; index++) {
        if (cart[index] && carts[index]) {
          totals += cart[index].productDetail.price * carts[index].quantity;
        }
      }
    }
    setTotal(totals)
  }, [cart]);
  useEffect(() => {
    console.log("vào useffect");
    formatCart();
  }, [localStorage.getItem('carts')]);
  function handleOrder() {
    let newGuestReceipt: newGuestReceipt = {
      email: email,
      phoneNumber: phone,
      total: cart.reduce((value, cur) => {
        return value + cur.quantity * cur.productDetail.price
      }, 0),
      payMode: "CASH"
    }
    let guestReceiptDetailList = JSON.parse(localStorage.getItem("carts") ?? "[]")

    api.purchaseApi.createGuestReceipt(newGuestReceipt, guestReceiptDetailList)
      .then(res => {
        console.log("res", res.data)
      })
    alert("vui lòng chờ nhận hàng");
    localStorage.setItem('carts', '[]');
    window.location.reload()
  }
  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      {cart.map((cartItem) => (
                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={cartItem.productId}>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={cartItem.productDetail.avatar} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{cartItem.productDetail.name}</h6>
                            <h6 className="text-black mb-0">{cartItem.productDetail.des}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2" onClick={() => handleAddToCart('giam', cartItem.productId)}>
                              <i className="fas fa-minus" />
                            </button>
                            <input type="number" className="form-control form-control-sm" id="form1" style={{ width: '100px' }}
                              value={cartItem.quantity} readOnly />
                            <button className="btn btn-link px-2" onClick={() => handleAddToCart('tang', cartItem.productId)}>
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{cartItem.productDetail.price.toLocaleString('vi-VN',
                              { style: 'currency', currency: 'VND' })}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" onClick={() => handleAddToCart('xoa', cartItem.productId)} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <div className="fw-bold mb-5 mt-2 pt-1">Thông tin người nhận
                          <div>
                            <div>
                              <input type="text" placeholder='email' style={{ border: '1px solid red' }} value={email} onChange={(e) => (
                                setEmail(e.target.value)
                              )} />
                            </div>
                            <br />
                            <div>
                              <input type="number" placeholder='phoneNumber' style={{ border: '1px solid red' }} 
                              value={phone} onChange={(e) =>(setPhone(e.target.value))} />
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <h5 className="text-uppercase mb-3">Hình Thức Thanh Toán</h5>
                        <div className="mb-4 pb-2">
                          <select>
                            <option value="CASH">Tiền Mặt</option>
                            <option disabled value="ZALO">Zalo</option>
                          </select>
                        </div>
                        <div className="mb-5">

                        </div>
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Tổng Tiền</h5>
                          <h5>{total.toLocaleString('vi-VN',
                            { style: 'currency', currency: 'VND' })}</h5>
                        </div>
                        <button
                          onClick={() => {
                            handleOrder()
                          }}
                          // onClick={()=>
                          // window.location.href='/pay'
                          // }
                          type="button" className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark" style={{ backgroundColor: 'orange' }}>
                          Thanh toán
                        </button>
                      </div>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




