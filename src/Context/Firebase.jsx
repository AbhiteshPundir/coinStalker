// import { createContext } from 'react'
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import  {getDatabase } from 'firebase/database'

// const firebaseConfig = {
//     apiKey: "AIzaSyB9a79IpveLG5YOuKeMGtXRmSLShi8FtI0",
//     authDomain: "coin-stalker-8df3d.firebaseapp.com",
//     projectId: "coin-stalker-8df3d",
//     storageBucket: "coin-stalker-8df3d.appspot.com",
//     messagingSenderId: "767741721014",
//     appId: "1:767741721014:web:e1a8e36fcc8ace90b36917",
//     measurementId: "G-NYCY2WJGPG",
//     databaseURL:"https://coin-stalker-8df3d-default-rtdb.firebaseio.com"
//   };

// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);

// const FirebaseContext = createContext(null);

// export const FirebaseProvider = (props) =>{

//     const signupUserWithEmailAndPassword = (email,password)=> {
//         return createUserWithEmailAndPassword(firebaseAuth, email, password);
//     }

//     const putData = 

//     return(
//         <FirebaseContext.Provider>
//             {props.children}
//         </FirebaseContext.Provider>
//     )
// };