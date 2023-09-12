import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";

/* Google Auth Import */
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

/* Your Config */
const firebaseConfig = {
  apiKey: "AIzaSyC4G6wD2HQ34sP2rHOilbQ2gCEuMYG0FPs",
  authDomain: "typescript-4439a.firebaseapp.com",
  projectId: "typescript-4439a",
  storageBucket: "typescript-4439a.appspot.com",
  messagingSenderId: "1032365003250",
  appId: "1:1032365003250:web:e955495eddea7f574b5b6b",
  measurementId: "G-5JFZKYLMK9"
};
/* End Config */

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToStorage(file: File, folderName: string) { 

  if (!file) { 
    return false
  }
  const fileRef = ref(storage, `${folderName}/` + file.name);

  let url = await uploadBytes(fileRef, file).then( async res => {
    return await getDownloadURL(res.ref)
    .then(url => url)
    .catch(er => false)
  })

  return url
}

/* Google Auth Import */
const googleProvider = new GoogleAuthProvider();

export async function googleLogin() {
  let auth = getAuth(app);
  return await signInWithPopup(auth, googleProvider);
}

