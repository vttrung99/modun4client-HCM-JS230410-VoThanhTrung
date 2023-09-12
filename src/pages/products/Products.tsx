import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './product.scss'
import api from '@services/apis'
// import { match } from 'assert';
import Card from '@/components/Body/CartAdmin';
import { number } from 'react-i18next/icu.macro';
interface Category {
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

interface Picture {
    file: File;
    url: string;
}
export default function Products() {
    const imgPreviewRef = useRef();
    
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [categories1, setCategories1] = useState<Category[]>([]);
    const [count, setCount] = useState(0);
    console.log("🚀 ~ file: Products.tsx:39 ~ Products ~ count:", count)
useEffect(()=>{
if(!localStorage.getItem("token")){
    window.location.href = '/'
}
},[])
    useEffect(() => {
        api.categoryApi.findMany()
            .then(res => {
                if (res.status != 200) {
                    alert(res.data.message)
                } else {
                    setCategories1(res.data.data)
                    
                }
            })
    }, [count])
   
    function addNewProduct(e: FormDataEvent) {
        e.preventDefault();
        let formData = new FormData();

        formData.append("product", JSON.stringify({
            categoryId: (e.target as any).categoryId.value,
            name: (e.target as any).name.value,
            des: (e.target as any).des.value,
            price: (e.target as any).price.value,
        }))
        formData.append("imgs", avatarFile!)
        for (let i in pictures) {
            formData.append("imgs", pictures[i].file)
        }




        //  (e.target as any).categoryId.value
            // (e.target as any).name.valu='';
            //  (e.target as any).des.value='';
            //  (e.target as any).price.value='';
            //  (e.target as any).imgs.file='';

            (e.target as HTMLFormElement).reset();

        api.productApi.create(formData)
  .then(res => {
    setCount(prevCount => prevCount + 1);
    console.log("res", res);
    alert("Thêm sản phẩm Thành Công")
  })
  .catch(err => {
    console.error(err);
  });
        
    }
    return (
        <div >
            <div className='border' style={{ margin: 'auto', marginTop: '200px', width: '50%' }}>
                <form
                    style={{ width: '80%', margin: 'auto', marginTop: '50px' }}
                    onSubmit={(e) => {
                        addNewProduct(e);
                    }}>
                    <div className="row mb-4">
                        <div className="col">
                            <div>
                                Loại sản phẩm
                                <select name='categoryId'>
                                    {
                                        categories1.map(category =>
                                            <option key={Math.random() * Date.now()}
                                                value={(category as Category).id}>{(category as Category).title}
                                            </option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control border border-success" name='name' />
                                <label className="form-label" htmlFor="form3Example2">
                                    Name
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control border border-success" name='des' />
                        <label className="form-label" htmlFor="form3Example3">
                            des
                        </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input type="NUMBER" id="form3Example4" className="form-control border border-success" name='price' />
                        <label className="form-label" htmlFor="form3Example4">
                            Price
                        </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input id="form3Example4"
                            className="form-control border border-success"
                            name='imgs' type="file" onChange={(e) => {
                                if (e.target.files) {
                                    if (e.target.files.length > 0) {
                                        (imgPreviewRef.current! as HTMLImageElement).src = URL.createObjectURL(e.target.files[0]);
                                        setAvatarFile(e.target.files[0])
                                    }
                                }
                            }} />
                        {/* <label className="form-label" htmlFor="form3Example4">
                            file ảnh 1
                        </label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <input name="imgs" type="file" multiple onChange={(e) => {
                            if (e.target.files) {
                                if (e.target.files.length > 0) {
                                    let tempPictures: Picture[] = [];
                                    for (let i in e.target.files) {
                                        if (i == "length") {
                                            break
                                        }
                                        tempPictures.push({
                                            file: e.target.files[i],
                                            url: URL.createObjectURL(e.target.files[i])
                                        })
                                    }
                                    setPictures(tempPictures)
                                }
                            }
                        }} id="form3Example4" className="form-control border border-success" />
                        {/* <label className="form-label" htmlFor="form3Example4">
                            ảnh 2
                        </label> */}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4 " style={{ backgroundColor: 'blue' }} >
                        Thêm sản Phẩm
                    </button>
                    {/* Register buttons */}

                </form>

            </div>
            <div style={{ margin: '0px auto', width: '500px', textAlign: "center", padding: '0' }}>

                <img ref={imgPreviewRef} style={{ width: "100px", height: "100px", margin: '0 auto' }} />
            </div>
            <div style={{ margin: ' auto' }}>
                <div style={{
                    display: 'flex', width: '500px',
                    gap: '10px', margin: " auto"

                }}>
                    {
                        pictures.map(picture =>
                            <div style={{ margin: "auto" }} key={Date.now()} > <img src={picture.url}
                                style={{ width: "100px", height: "100px", margin: "auto" }}
                            />
                            </div>
                        )
                    }
                </div><br />
                <h1 style={{ margin: '0 auto', textAlign: 'center' }}>DANH SÁCH SẢN PHẨM ĐÃ THÊM</h1><br />
                <div>
                    {
                        categories1.map((category) =>
                            <div key={Math.random() * Date.now()}>
                                <div style={{ backgroundColor: 'aqua', textAlign: "center" }} >{category.title}</div>
                                <div style={{ marginTop: '10px' }}>
                                    <div style={{
                                        display: 'grid', width: '1000px',
                                        gap: '10px', textAlign: 'center', padding: '0', margin: "auto",
                                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                                    }}>
                                        {category.products.map((product) => (
                                            <Card  product={product} key={Math.random() * Date.now()}></Card>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}
