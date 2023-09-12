import './main.scss';
import RouteSetup from '@routes/RouteSetup';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from './stores'
import api from '@services/apis'
import { useEffect } from 'react';
import { userAction } from './stores/slices/user.slice';

function App() {
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
  return (
    <div >
      {/* <div style={{ display: 'flex' }}>
        <div style={{ width: "90%" }}><i className="fa-solid fa-phone"></i>: 0973.834.662 - Email: 92thanhtrung@gmail.com</div>
        <h1 >User is login: {store.userStore.data?.firstName} {store.userStore.data?.lastName}</h1>
        <div style={{ width: '100px' }}>Đăng nhập</div>
        <div style={{ width: '100px' }}>Đăng ký</div>
      </div> */}
      {/* Routing */}
      <RouteSetup />
     
    </div>
  )
}

export default App
