import React, { FormEvent, memo, useState } from 'react'
import './user.scss'
import { useTranslation } from 'react-i18next'
import DropDown from '@/components/DropDown'
import api from '@services/apis'
import Loading from './components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message, Modal } from 'antd';
const Register = () => {
    const [load, setLoad] = useState(false);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    const { t } = useTranslation();

    async function login(event: FormEvent) {
        event.preventDefault();

        if (load) return
        let data = {
            userName: (event.target as any).userName.value,
            password: (event.target as any).password.value,
        }
        setLoad(true)
        await api.userApi.login(data)
            .then(res => {
                if (res.status != 200) {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "thử lại"
                    })
                } else {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "ok",
                        onOk: () => {
                            localStorage.setItem("token", res.data.token)
                            window.location.href = '/'
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
    const [showPassword, setShowPassword] = useState(false);
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <section className="bg-while-50 dark:bg-while-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            {t('login')}
                        </h1>
                        <form onSubmit={(e) => {
                            login(e)
                        }} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    {t('username')}
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                     sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                     dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Thanh Trung web"
                                
                                    style={{ color: 'black' }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                                >
                                    {t('password')}
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                    dark:bg-while-700 dark:border-gray-600 dark:placeholder-gray-400
                                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    style={{ color: 'black' }}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"

                                        onChange={handleCheckboxChange}
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded 
                                        bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-white-600 
                                        dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                       
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        Show Password

                                    </label>
                                </div>
                            </div>
                            {
                                load && <Loading />
                            }
                            <button
                                type="submit"
                                className={`${load && 'active'} btn_submit w-full text-white
                                 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                            >
                                Login
                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do you have an account?{" "}
                                <a
                                    href="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Register
                                </a>
                            </p>
                            <DropDown />
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default memo(Register)