//Here the function is called at the end, and the module is called in the app.js

const person = {
  name: "Killman",
  team: "wolves",
};

const person2 = {
  name: "Collins",
  team: "wolves",
};

function playres() {
  console.log(`The players are ${person.name} and ${person2.name}`);
}

playres();
