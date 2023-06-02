import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
} from "firebase/firestore";
import { database }  from "../client";

/*const postCollectionRef = collection(database, "posts");

class postService {
    addPost = async (post) => {
        return await addDoc(postCollectionRef, post);
    };

    updatePost = async (id, updateData) => {
        const postDoc = doc(database, "posts", id);
        return await updateDoc(postDoc, updateData);
    };

    deletePost = async (id) => {
        const postDoc = doc(database, "posts", id);
        return await deleteDoc(postDoc);
    };

    getAllPosts = async () => {
        const posts = await getDocs(
            query(postCollectionRef, orderBy("date", "desc"))
        );
        return posts;
    };

    getPost = async (id) => {
        const postDoc = doc(database, "posts", id);
        return await getDoc(postDoc);
    };
}

export default new postService();*/

const postCollectionRef = collection(database, "posts-dev");

class postService {
    addPost = async (post) => {
        return await addDoc(postCollectionRef, post);
    };

    updatePost = async (id, updateData) => {
        const postDoc = doc(database, "posts-dev", id);
        return await updateDoc(postDoc, updateData);
    };

    deletePost = async (id) => {
        const postDoc = doc(database, "posts-dev", id);
        return await deleteDoc(postDoc);
    };

    getAllPosts = async () => {
        const posts = await getDocs(
            query(postCollectionRef, orderBy("date", "desc"))
        );
        return posts;
    };

    getPost = async (id) => {
        const postDoc = doc(database, "posts-dev", id);
        return await getDoc(postDoc);
    };
}

export default new postService();
