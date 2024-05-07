// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAr1kFKV-AxCmyakL1rTz0u358lyipgcGk",
    authDomain: "mercado-cp2.firebaseapp.com",
    databaseURL: "https://mercado-cp2-default-rtdb.firebaseio.com",
    projectId: "mercado-cp2",
    storageBucket: "mercado-cp2.appspot.com",
    messagingSenderId: "420700309422",
    appId: "1:420700309422:web:9c59c7c619653b4e206a3f",
    measurementId: "G-NHD3HF3W5L"
};

export const app = initializeApp(firebaseConfig);