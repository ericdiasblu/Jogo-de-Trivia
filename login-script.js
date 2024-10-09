// Importar as funções que você precisa do SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

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
const db = getFirestore(app);   

// Função para exibir erros
function logError(context, error) {
    console.error(`${context} falhou:`, error);
    alert(`${context} falhou: ${error.message || error}`);
}

// Função para cadastro
window.register = function() {
    const userEmail = document.querySelector('.register-form input[type="email"]').value;
    const userPassword = document.querySelector('.register-form input[type="password"]').value;

    if (!userEmail || !userPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            alert("Cadastro realizado com sucesso!");
            console.log("Usuário criado:", userCredential.user);

            // Criar documento no Firestore para o novo usuário
            const userId = userCredential.user.uid;
            const userDocRef = doc(db, "users", userId);

            setDoc(userDocRef, { pontos: 0 })
                .then(() => {
                    console.log("Documento do usuário criado com sucesso no Firestore!");
                })
                .catch((error) => {
                    logError("Criação de documento do usuário no Firestore", error);
                });
        })
        .catch((error) => {
            logError("Cadastro", error);
        });
}

// Função para login
window.login = function() {
    const userEmail = document.querySelector('.login-form input[type="email"]').value;
    const userPassword = document.querySelector('.login-form input[type="password"]').value;

    if (!userEmail || !userPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            alert("Login realizado com sucesso!");
            console.log("Usuário logado:", userCredential.user);

            // Criar ou atualizar documento no Firestore
            const userId = userCredential.user.uid;
            const userDocRef = doc(db, "users", userId);

            setDoc(userDocRef, { pontos: 0 }, { merge: true })
                .then(() => {
                    console.log("Documento do usuário criado/atualizado com sucesso no Firestore!");
                })
                .catch((error) => {
                    logError("Atualização de documento do usuário no Firestore", error);
                });

            window.location.href = "./tela-inicial/tela-inicial.html";
        })
        .catch((error) => {
            logError("Login", error);
        });
}

// Função para redefinir a senha
window.resetPassword = function() {
    const userEmail = document.querySelector('.login-form input[type="email"]').value;

    if (!userEmail) {
        alert("Por favor, insira seu email para redefinir a senha.");
        return;
    }

    sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            alert("Um email de redefinição de senha foi enviado para " + userEmail);
        })
        .catch((error) => {
            logError("Redefinição de senha", error);
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

    // Event listener para "Esqueceu sua senha?"
    document.getElementById("forgot-password-link").addEventListener("click", function(event) {
        event.preventDefault();
        resetPassword();
    });
});
