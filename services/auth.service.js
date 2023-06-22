import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, where, collection, getDocs } from "firebase/firestore";
import { auth, database } from "../client";

const permissionsCollectionRef = collection(database, "permissions");

class authService {
    queryByUsersInAccessOne = async (uid) => {
        const selectedUsers = await getDocs(
            query(permissionsCollectionRef, where("acesso1", "==", true))
        );

        const users = selectedUsers.docs.map((doc) => doc.id);

        for (let index = 0; index < users.length; index++) {
            if (users[index] === uid) {
                return true;
            } else {
                return false;
            }
        }
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
