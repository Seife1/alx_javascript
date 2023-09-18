#!/usr/bin/node

// Closure

function welcomeMessage(fullName) {
  function bievenue() {
    alert ("Welcome" + " " + fullName);
  }

  return bievenue;
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
