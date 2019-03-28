var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.reverse();
planets.forEach(populateDDL);

function populateDDL(multiplier) {
  var planetSelection = document.createElement('option');
  planetSelection.value= multiplier[0];
  document.getElementById('planets').appendChild(planetSelection).textContent = multiplier[0];
}

function calculateWeight(weight, planetName) {
  var weight = document.getElementById('user-weight').value;
  var planetName = document.getElementById('planets').selectedIndex;
  var gravity = planets[planetName][1];
  return weight * gravity;
}

function handleClickEvent() {
  var userWeight = parseFloat(document.getElementById('user-weight').value);
  var planetName = document.getElementById('planets').value;
  var result = calculateWeight(userWeight, planetName);
  document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
}
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)