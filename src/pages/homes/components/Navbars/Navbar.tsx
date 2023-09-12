import './navbar.scss'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../../../stores/slices/user.slice'
import { StoreType } from '../../../../stores'
import api from '@services/apis'
import { log } from 'console';
interface CartItem {
    productId: string;
    quantity: number;
}
export default function Navbar() {
    const [carts, setCarts] = useState<CartItem[]>([])
    const dispatch = useDispatch();
    const store = useSelector(store => store) as StoreType;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            api.userApi.authentication()
                .then(res => {
                    console.log("res", res)
                    if (res.status == 200) {
                        dispatch(userAction.setLoginData(res.data.data))
                    } else {
                        localStorage.removeItem("token")
                    }
                })
        }
    }, [])
    const placeholders = [
        'A',
        ,
        'Ar'
        ,
        'Ard'
        ,
        'Ardu'
        ,
        'Ardui'
        ,
        'Arduin'
        ,
        'Arduino'
        ,
        'Arduino u'
        ,
        'Arduino un'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino un'
        ,
        'Arduino u'
        ,
        'Arduino'
        ,
        'Arduin'
        ,
        'Ardui'
        ,
        'Ardu'
        ,
        'Ard'
        ,
        'Ar'
        ,
        'A'
        ,
        'E'
        ,
        'Es'
        ,
        'Esp'
        ,
        'Esp8'
        ,
        'Esp82'
        ,
        'Esp826'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,

        'Esp8266'
        ,
        'Esp826'
        ,
        'Esp82'
        ,
        'Esp8'
        ,
        'Esp'
        ,
        'Es'
        ,
        'E'
        ,
        "N"
        ,
        "Nh"
        ,
        "Nhậ"
        ,
        "Nhập "
        ,
        "Nhập t"
        ,
        "Nhập từ "
        ,
        "Nhập từ k"
        ,
        "Nhập từ kh"
        ,
        "Nhập từ khó"
        ,
        "Nhập từ khóa "
        ,
        "Nhập từ khóa t"
        ,
        "Nhập từ khóa tì"
        ,
        "Nhập từ khóa tìm "
        ,
        "Nhập từ khóa tìm k"
        ,
        "Nhập từ khóa tìm ki"
        ,
        "Nhập từ khóa tìm kiế"
        ,
        "Nhập từ khóa tìm kiếm"
        ,
        "Nhập từ khóa tìm kiếm."
        ,
        "Nhập từ khóa tìm kiếm.."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm.."
        ,
        "Nhập từ khóa tìm kiếm."
        ,
        "Nhập từ khóa tìm kiếm"
        ,
        "Nhập từ khóa tìm kiế"
        ,
        "Nhập từ khóa tìm ki"
        ,
        "Nhập từ khóa tìm k"
        ,
        "Nhập từ khóa tìm "
        ,
        "Nhập từ khóa tì"
        ,
        "Nhập từ khóa t"
        ,
        "Nhập từ khóa "
        ,
        "Nhập từ khó"
        ,
        "Nhập từ kh"
        ,
        "Nhập từ k"
        ,
        "Nhập từ "
        ,
        "Nhập t"
        ,
        "Nhập "
        ,
        "Nhậ"
        ,
        "Nh "
        ,
        "N"

    ];
    const userLogin = ['Hi: ','Hi: '+store.userStore.data?.firstName,'Hi: '+store.userStore.data?.firstName+' '+store.userStore.data?.lastName,'']
    function cartss() { 
        let count = 0
        var a = document.getElementById("cart") as HTMLElement;
        let cartss: CartItem[] = JSON.parse(localStorage.getItem('carts') ?? '[]');
        for (let i = 0; i < cartss.length; i++) {
            count = count +cartss[i].quantity;
          }
        a.innerText = count.toString();
        console.log("count",count);
        
        setCarts(cartss)
    }

    useEffect(() => {
        cartss()
    }, [localStorage.getItem("carts")])
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 100);
        return () => clearInterval(interval);
    }, [currentPlaceholderIndex]);

    const [uerLogin1, setUserLogin1] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setUserLogin1((prevIndex) => (prevIndex + 1) % userLogin.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [uerLogin1]);
    function logOut(){
        const confirms = confirm("Bạn muốn đăng xuất không")
        if(confirms){
            localStorage.removeItem("token");
        window.location.href = '/'
        }
        return
    }
    return (
        <div>

            <div style={{ display: 'flex' }}>
                <div style={{ width: "90%" }}><i className="fa-solid fa-phone"></i>: 0973.834.662 - Email: 92thanhtrung@gmail.com</div>
                {store.userStore.data?.firstName ? <h1 style={{ width: '100px' }}><button onClick={()=>logOut()}>Đăng Xuất</button>
                </h1>
                    : <div style={{ width: '100px' }}><a href="/login">Đăng nhập</a></div>}

                <div style={{ width: '100px' }}><a href="/register">Đăng ký</a></div>
                <div style={{ width: '50px' }}><a href="/cart" className="fa-solid fa-cart-shopping" id='cart'>0</a></div>
            </div>
           
            <nav className="nav_box primary-navigation " style={{ backgroundColor: 'aqua' }} role="navigation">
                <div style={{width:'200px',height:'10px'}}>{store.userStore.data?.firstName ?<> {userLogin[uerLogin1]}</>:<></>}</div>
           
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://shopee.vn/banlinhkien_mh?utm_campaign=&utm_content=sellervn-89984243&utm_medium=affiliates&utm_source=an_17171860000"
                        className="flex items-center">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.dBAf5XOGQ0wdpx54u0PV-gHaHa&pid=Api&P=0&h=180"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{ color: 'red' }}>
                            LINH KIỆN IOT
                        </span>
                    </a>
                    {/* Hi: {store.userStore.data?.firstName} {store.userStore.data?.lastName} */}

                   
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center
                     text-sm text-red-500 rounded-lg md:hidden hover:bg-blue-100
                      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-blue-400
                       dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className=" hidden w-full md:block md:w-auto " id="navbar-default">
                        <ul style={{ backgroundColor: 'aqua' }} className="font-medium flex flex-col p-3 md:p-0 mt-1  
                     rounded-lg  md:flex-row md:space-x-8
                      md:mt-0 md:border-0 md:bg-aqua dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>

                                <div className='input'><input type="text" placeholder={placeholders[currentPlaceholderIndex]} />
                                    <span> <i className="fa-solid fa-magnifying-glass"></i></span></div>
                                <div>hot line: 0973834662</div>
                            </li>
                            <li><a href="/">Trang chủ</a>
                                
                            </li>
                            <li><a href="#">Bo mạch</a>
                                <ul className="dropdown" style={{ zIndex: '100' }}>
                                    <li><a href="#">Arduino</a></li>
                                    <li><a href="#">Esp 32</a></li>
                                    <li><a href="#">Cảm biến</a></li>
                                    <li><a href="#">Học tập</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Chính hảng</a>
                                <ul className="dropdown" style={{ zIndex: '100' }}>
                                    <li><a href="#">Arduino</a></li>
                                    <li><a href="#">Esp 32</a></li>
                                    <li><a href="#">Cảm biến</a></li>
                                    <li><a href="#">Học tập</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Timer</a>
                                <ul className="dropdown" style={{ zIndex: '100' }}>
                                    <li><a href="#">Ds3231</a></li>
                                    <li><a href="#">Relay 2 kênh</a></li>
                                    <li><a href="#">Timer 24 giờ</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}





