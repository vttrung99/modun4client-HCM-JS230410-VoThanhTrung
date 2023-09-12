import axios from "axios";

export default {
    createGuestReceipt: async function(newGuestReceipt: any, guestReceiptDetailList: any) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "purchase", {
            newGuestReceipt,
            guestReceiptDetailList
        })
    },
    findGuestReceipt: async function(data: {
        email: string;
        otp?: string;
    }) {
        let body: any = {
            guestEmail: data.email
        }
        if(data.otp) {
            body.otp = data.otp
        }
        return await axios.post(import.meta.env.VITE_SV_HOST + "purchase/order-history", body)
    },
    getReceipt: async function() {
        return await axios.get(import.meta.env.VITE_SV_HOST + "purchase")
    },
}