// Importar as funções que você precisa do SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARaTW45tTYaD_oOU4pTC5Q3xzoaJEThug",
    authDomain: "triviaworld-78303.firebaseapp.com",
    projectId: "triviaworld-78303",
    storageBucket: "triviaworld-78303.appspot.com",
    messagingSenderId: "837777772940",
    appId: "1:837777772940:web:f2e0c54ff850a8ed3446a9",
    measurementId: "G-CYM802EQT7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Função para cadastro
window.register = function() {
    const userEmail = document.querySelector('.register-form input[type="email"]').value;
    const userPassword = document.querySelector('.register-form input[type="password"]').value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            alert("Cadastro realizado com sucesso!");
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.error("Erro no cadastro:", error);
            alert("Erro ao realizar cadastro: " + error.message);
        });
}

// Função para login
window.login = function() {
    const userEmail = document.querySelector('.login-form input[type="email"]').value;
    const userPassword = document.querySelector('.login-form input[type="password"]').value;

    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            alert("Login realizado com sucesso!");
            console.log(userCredential.user);
            window.location.href = "./tela-inicial/tela-inicial.html";
        })
        .catch((error) => {
            console.error("Erro no login:", error);
            alert("Erro ao realizar login: " + error.message);
        });
}

// Alternância entre Login e Cadastro
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register-link").addEventListener("click", function() {
        document.querySelector(".login-form").style.display = "none";
        document.querySelector(".register-form").style.display = "block";
    });

    document.getElementById("login-link").addEventListener("click", function() {
        document.querySelector(".register-form").style.display = "none";
        document.querySelector(".login-form").style.display = "block";
    });

    // Adiciona event listeners
    document.querySelector('.login-form form').addEventListener('submit', function(event) {
        event.preventDefault();
        login();
    });

    document.querySelector('.register-form form').addEventListener('submit', function(event) {
        event.preventDefault();
        register();
    });
});
