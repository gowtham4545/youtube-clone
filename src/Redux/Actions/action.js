import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from '../../firebase'

export const login = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log(res);
        const user = res.user;
        const token = user.accessToken
        const name = user.displayName
        const photoURL = user.photoURL
        const profile = { name: name, photoURL: photoURL }
        const data = { profile: profile, token: token }
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.message) {
            return (error.response.data.message)
        } else {
            return (error.message)
        }
    };
}