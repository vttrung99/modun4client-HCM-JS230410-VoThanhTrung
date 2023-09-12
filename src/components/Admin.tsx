import React ,{useState}from 'react'
import product from '@pages/products/Products'
import Cart from '../../src/components/Pay'
import { useSelector } from 'react-redux';
import { StoreType } from '../stores'
import "./Admin.scss"
import Products from '@pages/products/Products';
import Category from './Category';
export default function Admin() {
    const store = useSelector(store => store) as StoreType;
    const[productList,setProductlist] = useState<string>('them')
    function addProDuct(product:string){ 
            setProductlist(product)
    }
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="" id="navbarSupportedContent" style={{}}>
                        <ul className="navbar-nav me-auto  bg-success " style={{ width: '100%', textAlign: 'center', margin: 'auto', padding: '0px' }}>

                            <li className="nav-item">
                                <a className="nav-link me-5" href="#" style={{ fontSize: "30px" }} onClick={()=>addProDuct('them')}>
                                    Thêm Sản phẩm
                                </a>
                            </li>
                            <li className="nav-item ms-5 me-5" style={{ fontSize: "30px" }}>
                                <a className="nav-link" href="#"  onClick={()=>addProDuct('category')}>
                                    Thêm Loại sản Phẩm
                                </a>
                            </li>
                            <li className="nav-item ms-5" style={{ fontSize: "30px" }}  onClick={()=>addProDuct('quanly')}>
                                <a className="nav-link" href="#">
                                    Quản lý khách hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ fontSize: '40px' }}>xin chào: {store.userStore.data?.lastName + store.userStore.data?.firstName}</div>
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="#">
                        </a>
                        <div className="dropdown">
                            <a
                                className="text-reset me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                            </a>
                        </div>
                        <div className="dropdown">

                        </div>
                    </div>

                </div>

            </nav>
         
            {productList=='them'? <Products></Products>:<></>}
            {productList=='category'?  <Category></Category>:<></>}
            {productList=='quanly'?  <Cart></Cart>:<></>}
        </>



    )
}
