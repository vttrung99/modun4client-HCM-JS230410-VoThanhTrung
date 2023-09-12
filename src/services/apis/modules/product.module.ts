import axios from 'axios'
export default {
    create:async (formData: FormData) => {
        return await axios.post(import.meta.env.VITE_SV_HOST+'products',formData,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
    },
    finfindByProduct:async (productId:string) => {
        return await axios.get(import.meta.env.VITE_SV_HOST+`products/${productId}`)
    },
    delete:async (productId:string) => {
        return await axios.delete(import.meta.env.VITE_SV_HOST+`products/${productId}`)
    }
}