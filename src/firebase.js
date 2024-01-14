import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB7mw8WOAHNF1-KcJyBvfx2b0LrQfkzNxU",
    authDomain: "ytb-clone-id.firebaseapp.com",
    projectId: "ytb-clone-id",
    storageBucket: "ytb-clone-id.appspot.com",
    messagingSenderId: "884503122168",
    appId: "1:884503122168:web:bacf50e8084edc09ae6b0d"
};

const firebase = initializeApp(firebaseConfig);

export default getAuth(firebase);