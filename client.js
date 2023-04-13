import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCLMSvQ9JX5N_zEZ4-_HJM-RT7oBV9H4KA",
  authDomain: "onigirihardcore-88090.firebaseapp.com",
  projectId: "onigirihardcore-88090",
  storageBucket: "onigirihardcore-88090.appspot.com",
  messagingSenderId: "831799809088",
  appId: "1:831799809088:web:05dea243ba8cd249aa7ba5"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export const storage = getStorage(app)

export default database