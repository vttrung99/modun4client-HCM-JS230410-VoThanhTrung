import React, { FormEvent, memo, useState } from 'react'
import './user.scss'
import { useTranslation } from 'react-i18next'
import DropDown from '@/components/DropDown'
import api from '@services/apis'
import Loading from './components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message, Modal } from 'antd';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleCheckboxChange = () => {
      setShowPassword(!showPassword);
    };
    const [load, setLoad] = useState(false);
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      );
    const {t} = useTranslation();

    async function register(event: FormEvent) {
        event.preventDefault();

        if(load) return

        let newUser = {
            email: (event.target as any).email.value,
            userName: (event.target as any).userName.value,
            password: (event.target as any).password.value,
            firstName: (event.target as any).firstName.value,
            lastName: (event.target as any).lastName.value,
        }

        setLoad(true)

        await api.userApi.register(newUser)
        .then(res => {
            if(res.status != 200) {
                Modal.confirm({
                    content: res.data.message,
                    okText: "thử lại"
                })
            }else {
                Modal.success({
                    content: res.data.message,
                    okText: "login",
                    onOk: () => {
                            localStorage.setItem("token", res.data.token)
                            window.location.href = '/login'
                        }
                })
               
            }
        })
        .catch(_err => {
            Modal.success({
                content: "Sập server!",
                okText: "thử lại"
            })
        })

        setLoad(false)
    }
    return (
        <section className="bg-gray-50 dark:bg-while-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
               
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            {t('createYourAccount')}
                        </h1>
                        <form onSubmit={(e) => {
                            register(e)
                        }} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    
                                    style={{color:'black'}}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    style={{color:'black'}}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Password
                                </label>
                                <input
                                     type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     style={{color:'black'}}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Confirm password
                                </label>
                                <input
                                     type={showPassword ? 'text' : 'password'}
                                    name="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     style={{color:'black'}}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    First Name
                                </label>
                                <input
                                    type="confirm-password"
                                    name="firstName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     style={{color:'black'}}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                   
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     style={{color:'black'}}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        onChange={handleCheckboxChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900
                                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                        dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                         style={{color:'black'}}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-black-500 dark:text-black-300"
                                    >
                                       Show Password
                                    </label>
                                </div>
                            </div>
                            {
                                load && <Loading/>
                            }
                            <button
                                type="submit"
                                className={`${load && 'active'} btn_submit w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                            >
                                Create an account
                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <a
                                    href="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </a>
                            </p>
                            <DropDown/>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default memo(Register)