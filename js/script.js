  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAuth,
     createUserWithEmailAndPassword,
     signInWithPopup,
     GoogleAuthProvider
     } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCMWO93aaT0HaD21uqQ-RM4hRDc3VA6mmc",
    authDomain: "smit-e-commerce-application.firebaseapp.com",
    projectId: "smit-e-commerce-application",
    storageBucket: "smit-e-commerce-application.firebasestorage.app",
    messagingSenderId: "691707383552",
    appId: "1:691707383552:web:6955b49077269ed030ede5",
    measurementId: "G-DC20LGY005"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // SignUp Btn Variable
  let signUpBtn = document.getElementById("signupBtn");

  // SignUp Btn Variable
  let googleBtn = document.getElementById("googleBtn");

  // SignUp Btn Events 
  signUpBtn.addEventListener('click',signFunc);

  // Google Btn Events
  googleBtn.addEventListener('click',googleFunc);


// SignUp Form Function
function signFunc(){
  let semail = document.getElementById("semail").value;
  let spassword = document.getElementById("spassword").value;


  createUserWithEmailAndPassword(auth,semail,spassword)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log(user);
    alert("User Created Successfully");
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  })
}


// Google Authentication Function
function googleFunc(){
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth,provider)
  .then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log('user=>',user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('code Error=>',errorCode)
    console.log('Message Error=>',errorMessage)
  });
}