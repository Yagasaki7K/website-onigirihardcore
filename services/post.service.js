import database from "../client";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const postCollectionRef = collection(database, "posts");

class postService {
    addposts = (newPosts) => {
        return addDoc(postCollectionRef, newPosts);
    };

    updateposts = (id, updateDoc) => {
        const postDoc = doc(database, "posts", id);
        return updateDoc(postDoc, updateDoc);
    };

    deleteposts = (id) => {
        const postDoc = doc(database, "posts", id);
        return deleteDoc(postDoc);
    };

    getAllposts = () => {
        return getDocs(postCollectionRef);
    };

    getpost = (id) => {
        const postDoc = doc(database, "posts", id);
        return getDoc(postDoc);
    };
}

export default new postService();
