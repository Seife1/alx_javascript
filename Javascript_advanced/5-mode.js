#!/usr/bin/node

// Changing DOM with closure

function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const body = document.body;
    const paragraph = document.createElement('p');
    paragraph.innerText = "Welcome Holberton!"
    body.appendChild(paragraph);

    const button1 = document.createElement('button');
    const text1 = document.createTextNode("Spooky");
    button1.appendChild(text1);
    body.appendChild(button1);
    button1.setAttribute('id', 'spooky-btn')
    

    const button2 = document.createElement('button');
    const text2 = document.createTextNode("Dark Mode");
    button2.appendChild(text2);
    body.appendChild(button2);
    button2.setAttribute('id', 'dark-btn');

    const button3 = document.createElement('button');
    const text3 = document.createTextNode("Scream Mode");
    button3.appendChild(text3);
    body.appendChild(button3);
    button3.setAttribute('id', 'scream-btn');

    const btn1 = document.getElementById('spooky-btn');
    const btn2 = document.getElementById('dark-btn');
    const btn3 = document.getElementById('scream-btn');
    
    btn1.addEventListener('click', function(event) {
        event.preventDefault();
        spooky();
    });

    btn2.addEventListener('click', function(event) {
        event.preventDefault();
        darkMode();
    });

    btn3.addEventListener('click', function(event) {
        event.preventDefault();
        screamMode();
    });
}

main();