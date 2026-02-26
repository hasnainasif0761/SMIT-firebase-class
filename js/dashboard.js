import { 
    getAuth,
    initializeApp,
    signOut,
    firebaseConfig
 } from "./firebase.js";

// Configuration SetUP
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let userSessions = sessionStorage.getItem('users');

if(!userSessions){
    window.location.href = 'login.html'
}

let convertJSONtoParse = JSON.parse(userSessions);

var dash_img = document.getElementById('dash_img');
dash_img.src = convertJSONtoParse.photo

var dash_name = document.getElementById('dash_name');
dash_name.textContent = convertJSONtoParse.name

var dash_email = document.getElementById('dash_email');
dash_email.textContent = convertJSONtoParse.email

var dash_id = document.getElementById('dash_id');
dash_id.textContent = convertJSONtoParse.uid

let signoutBtn = document.getElementById('signout');
signoutBtn.addEventListener('click',signoutFunc);

function signoutFunc(){
    signOut(auth).then(() => {
     sessionStorage.removeItem('users');
     window.location.href = 'login.html';
    }).catch((error) => {
        console.log(error.message);
    });
}