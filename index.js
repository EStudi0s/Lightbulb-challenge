function toggleLight() {
    var lightbulb = document.getElementById("lightbulb");
    var body = document.body;
    var h1 = document.querySelector("h1");
    var h3 = document.querySelector("h3");
    var p = document.querySelector("p");

    if (lightbulb.src.includes("e0fd25f9127a9a109a0648c83ee61643")) {
        lightbulb.src = 'https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb.jpg'; // On state
        body.style.backgroundColor = 'white';
        h1.style.backgroundColor = 'red';
        h3.style.backgroundColor = 'red';
        h1.style.color = 'white';
        h3.style.color = 'white';
        p.style.color = 'black';
    } else {
        lightbulb.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'; // Off state
        body.style.backgroundColor = 'black';
        h1.style.backgroundColor = 'darkred';
        h3.style.backgroundColor = 'darkred';
        h1.style.color = 'gray';
        h3.style.color = 'gray';
        p.style.color = 'gray';
    }
}