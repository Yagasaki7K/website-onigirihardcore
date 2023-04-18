import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc
} from "firebase/firestore";
import database from "../client";

const postCollectionRef = collection(database, "posts");

class postService {
    add = async (post) => {
        return await addDoc(postCollectionRef, post);
    };

    update = async (id, updateData) => {
        const postDoc = doc(database, "posts", id);
        return await updateDoc(postDoc, updateData);
    };

    delete = async (id) => {
        const postDoc = doc(database, "posts", id);
        return await deleteDoc(postDoc);
    };

    getAll = async () => {
        const posts = await getDocs(query(postCollectionRef, orderBy("date", "desc")));
        return posts
    }

    getById = async (id) => {
        const postDoc = doc(database, "posts", id);
        return await getDoc(postDoc);
    };
}

export default new postService();
