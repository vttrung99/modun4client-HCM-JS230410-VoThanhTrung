import axios from 'axios'
export default {
    addToCard:async (data:{productId:string,userId:string,quantity:number}) => {
        return await axios.post(import.meta.env.VITE_SV_HOST+'addtocard',data)
    }

}