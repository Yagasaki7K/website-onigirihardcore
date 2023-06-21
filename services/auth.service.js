import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, where, collection, getDocs } from "firebase/firestore";
import { auth, database } from "../client";

const permissionsCollectionRef = collection(database, "permissions");

class authService {
    queryByAdmin = async (uid) => {
        const result = await getDocs(
            query(permissionsCollectionRef, where("user_uid", "==", uid))
        );
        result.forEach((doc) => {
            doc.id === "admin"
                ? console.log("Usuario pertence a permissão Admin")
                : null;
        });
    };

    signInGoogle = async (router) => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider).then((result) => {
            const userInfo = {
                Name: result.user.displayName,
                Email: result.user.email,
                Photo: result.user.photoURL,
                UId: result.user.uid,
            };
            sessionStorage.setItem(
                "GoogleAccessAuth",
                JSON.stringify(userInfo)
            );
            router.push("/");
        });
    };
}

export default new authService();
