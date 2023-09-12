import axios from 'axios'
export default {
    findMany:async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST+'categories/category')
    },
    create:async (title:any) => {
        return await axios.post(import.meta.env.VITE_SV_HOST+'categories',{title})
    }
}