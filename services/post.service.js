import database from "../client";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const postCollectionRef = collection(database, "posts");

class postService {
    addPost = (newPosts) => {
        return addDoc(postCollectionRef, newPosts);
    };

    updatePost = (id, updateDoc) => {
        const postDoc = doc(database, "posts", id);
        return updateDoc(postDoc, updateDoc);
    };

    deletePost = (id) => {
        const postDoc = doc(database, "posts", id);
        return deleteDoc(postDoc);
    };

    getAllPosts = () => {
        return getDocs(postCollectionRef);
    };

    getPost = (id) => {
        const postDoc = doc(database, "posts", id);
        return getDoc(postDoc);
    };
}

export default new postService();
