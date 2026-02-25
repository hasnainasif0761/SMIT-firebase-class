import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  firebaseConfig,
signInWithEmailAndPassword
} from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Varaible
const loginBtn = document.getElementById('loginBtn');

// Addeventlistner Event for login btn
loginBtn.addEventListener('click',loginFun);

// Animtion Variable
let animate = document.getElementById('main_div');

// Login Function 
function loginFun(e){
    e.preventDefault();
    
    let lemail = document.getElementById('lemail').value;
    let lpassword = document.getElementById('lpassword').value;
    signInWithEmailAndPassword(auth,lemail,lpassword)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log('Your user is=>',user);
        alert('User Login Successfully');
        window.location.href = 'dashboard.html';
        document.getElementById('lemail').value = '';
        document.getElementById('lpassword').value = '';
    }).catch((error)=>{
        const codeError = error.code;
        const errorMessage = error.message;
        console.log('Error Message=>',errorMessage);
        animate.classList.remove("animate__animated","animate__shakeX");
        void animate.offsetWidth;
        animate.classList.add("animate__animated","animate__shakeX");
    })
}
