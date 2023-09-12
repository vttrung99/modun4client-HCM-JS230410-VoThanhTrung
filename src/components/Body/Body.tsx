// import React from 'react';
import Carousel from './Carousel';
import api from '@services/apis'
import { useEffect, useState } from 'react'
import Card from './Card';
// import Footer from './Footers/Footer';
export interface Product {
  id: string;
  des: string;
  avatar: string;
  name: string;
  price: number;
  categoryId: string;
  sell:boolean

}
export interface Category {
  id: string;
  title: string;
  avatar: string;
  aciive: boolean;
  products: Product[];
}
export default function Body() {
  const [categories, setCategories] = useState<Category[]>([]);
  
  console.log("🚀 ~ file: Body.tsx:26 ~ Body ~ categories:", categories)

  useEffect(() => {
    api.categoryApi.findMany()
      .then(res => {
        if (res.status != 200) {
          alert(res.data.message)
        } else {
          setCategories(res.data.data)
        }
      })
  }, [])
  return (
    <div style={{ flexDirection: 'column', minHeight: "100vh", maxHeight: "100vh", overflowY: "auto", textAlign: 'center', }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ backgroundColor: "red", width: '25%' }}>DANH MỤC SẢN PHẨM</div>
        <div style={{ backgroundColor: "blue", width: '75%' }}>Flash sale</div>
      </div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div style={{ textAlign: 'center', display: 'inline', width: '100%' }}>
          <div style={{ width: '25%', textAlign: "left", display: 'inline-block', overflow: "scroll", height: "500px" }}>
            <ul  >
              <li>BACK TO SCHOOL</li><br />
              <li>HÀNG HOT HÈ 2023</li><br />
              <li>VI ĐIỀU KHIỂN - KIT PHAT TRIỂN </li><br />
              <li>TOOL, THIẾT BỊ, PHỤ KIỆN</li><br />
              <li>QUẢN LÝ NHỊT ĐỘ</li><br />
              <li>CONNECTORS</li><br />
              <li>CƠ ĐIỆN TỬ</li><br />
              <li>BACK TO SCHOOL</li><br />
              <li>HÀNG HOT HÈ 2023</li><br />
              <li>VI ĐIỀU KHIỂN - KIT PHAT TRIỂN </li><br />
              <li>TOOL, THIẾT BỊ, PHỤ KIỆN</li><br />
              <li>QUẢN LÝ NHỊT ĐỘ</li><br />
              <li>CONNECTORS</li><br />
              <li>CƠ ĐIỆN TỬ</li><br />
            </ul>
          </div>
          <div style={{ width: '50%', display: 'inline-block' }}>
            <Carousel></Carousel>
          </div>
          <div style={{ width: '25%', display: 'inline-block', backgroundColor: "yellow", textAlign: "right" }} >
            <img style={{ width: "500px", height: "220px" }}
              src="https://pos.nvncdn.net/f2fe44-24897/bn/20210412_WzrRCXRoK2qXCNUYoNOqkTEm.gif" alt="" />
            <img style={{ width: "500px", height: "220px" }}
              src="https://pos.nvncdn.net/f2fe44-24897/bn/20210525_OlugCaOQtEgxlf5JmlozmP7i.gif" alt="" />
          </div>
        </div>
      </div>
      <div>
        {
          categories.map((category) =>
            <div key={Math.random() * Date.now()}>
              <div style={{ backgroundColor: 'aqua' }} >{category.title}</div>
              <div style={{ marginTop: '10px' }}>
                <div style={{
                  display: 'grid', width: '1000px',
                  gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                }}>
                  {category.products.map((product) => 
                    {return product.sell?<Card product={product} key={Math.random() * Date.now()}></Card>:<></>}
                  )}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
