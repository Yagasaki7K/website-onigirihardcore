import database from "../client";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    orderBy,
    query,
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

    getAllPosts = async () => {
        const posts = await getDocs(
            query(postCollectionRef, orderBy("date", "desc"))
        );
        return posts;
    };

    getPost = (id) => {
        const postDoc = doc(database, "posts", id);
        return getDoc(postDoc);
    };
}

export default new postService();
