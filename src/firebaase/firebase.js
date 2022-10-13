import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPvP4SHoIN7DnqbshPZ-Fy7JFBYyoibt0",
  authDomain: "dbfakecommerce.firebaseapp.com",
  projectId: "dbfakecommerce",
  storageBucket: "dbfakecommerce.appspot.com",
  messagingSenderId: "627357652423",
  appId: "1:627357652423:web:a7005476ebd2ab01f875e2",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
