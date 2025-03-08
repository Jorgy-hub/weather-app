const firebaseConfig = {
    apiKey: "AIzaSyC9w0ukD2zQO_WhyCQeNjUxO3JJTNyepRg",
    authDomain: "iote2025-5e5dd.firebaseapp.com",
    databaseURL: "https://iote2025-5e5dd-default-rtdb.firebaseio.com",
    projectId: "iote2025-5e5dd",
    storageBucket: "iote2025-5e5dd.firebasestorage.app",
    messagingSenderId: "362519959090",
    appId: "1:362519959090:web:e25148d176f72820aace2b"
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database();

$(document).ready(function () {
    let tempRef = dbRef.ref("ESP32Weather/Temp/");
    tempRef.on('value', function (snapshot) {
        let temp = snapshot.val();
        $("#temp").text(temp + "°");
    });

    let pressRef = dbRef.ref("ESP32Weather/Presion/");
    pressRef.on('value', function (snapshot) {
        let pres = snapshot.val();
        $("#presion").text(pres.toFixed(2) + "mmHg");
    });

    let humRef = dbRef.ref("ESP32Weather/Humedad/");
    humRef.on('value', function (snapshot) {
        let pres = snapshot.val();
        $("#humedad").text(pres.toFixed(2) + "%");
    });
});
