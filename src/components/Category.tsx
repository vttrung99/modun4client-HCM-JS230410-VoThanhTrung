import React, { useState, useEffect } from 'react'
import api from '@services/apis'

import { Modal } from 'antd';
interface Category {
    map: any;
    id: string;
    title: string;
    avatar: string;
    aciive: boolean;
    products: Product[];
}

interface Product {
    id: string;
    des: string;
    avatar: string;
    name: string;
    price: number;
    categoryId: string;

}
export default function Category() {
    const [count, setCount] = useState<number>(1)
    const [category, setCategory] = useState('')
    const [category1, setCategories1] = useState<Category[]>([])
    useEffect(() => {
        console.log("vào rồi nhe");
        api.categoryApi.findMany()
            .then(res => {
                if (res.status != 200) {
                    alert(res.data.message)
                } else {
                    setCategories1(res.data.data)
                }
            })
    }, [count])
    async function handleAdd() {
        const data = category
        await api.categoryApi.create(data)
            .then(res => {
                if (res.status != 200) {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "thành công"
                    })
                } else {
                    Modal.success({
                        content: res.data.message,
                        okText: "Thêm sản phẩm thành công"
                    })
                }
            })
            .catch(_err => {
                Modal.success({
                    content: "Sập server!",
                    okText: "thử lại"
                })
            })
            setCount(count+1);
    }

    return (
        <div>
            <div style={{ margin: "0 auto", textAlign: "center", padding: '0px', marginTop: '20px' }}>
                <form style={{ width: '300px', height: '200px', border: '1px solid red', margin: 'auto' }} action="" onSubmit={(e) => {
                    e.preventDefault()
                    handleAdd()
                }}>
                    <input placeholder='Thêm loại sản phẩm' type="text"
                        onChange={(e) => setCategory(e.target.value)} value={category} name='category' style={{ border: '1px solid red', margin: '10px' }} /><br></br>
                    <button style={{ backgroundColor: 'orange', width: '200px', fontSize: '20px' }}  type='submit'> Add</button>
                </form>
            </div>
            {
                category1.map((category: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; products: any[]; }) =>
                    <div key={Math.random() * Date.now()}>
                        <div style={{ backgroundColor: 'aqua', textAlign: "center" }} >{category.title}</div>
                        <div style={{ marginTop: '10px' }}>
                            <div style={{
                                display: 'grid', width: '1000px',
                                gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                            }}>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
