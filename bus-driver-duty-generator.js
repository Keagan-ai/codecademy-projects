//Creating a system that assigns a bus driver his duty for the day which generates the type of bus he will be using, the number of the bus, and the route he will be driving.

// Driver sign in Message
const driverSignIn = name  => `Welcome ${name}. Here is the information of your duty for today: `;

// Get number from 0 -> num - 1
const generateNumber = num => Math.floor(Math.random() * num);

const busesAndDuty = {
  busTypes: ['electric bus', 'diesel bus', 'double decker bus', 'hybrid bus'],
  busNumbers: ['TE101', 'TE102', 'TE103', 'TE104'],
  routes: ['City circle', 'Morning school run', 'Afternoon School run', 'Evening shift']
}

// Stores the duty in an array
let driverDuty = [];

// Iterate over the busesAndDuty obj
for (let duty in busesAndDuty) {
  let option = generateNumber(busesAndDuty[duty].length)

  // Use the object's properties to customize the message being added to driverDuty
  switch(duty) {
    case 'busTypes':
      driverDuty.push(`Bus Type: ${busesAndDuty[duty][option]}.`)
      break
    case 'busNumbers':
      driverDuty.push(`Bus number: ${busesAndDuty[duty][option]}.`)
      break
    case 'routes':
      driverDuty.push(`Route: ${busesAndDuty[duty][option]}.`)
      break
    default:
      driverDuty.push(`Error! Could not assing you a bus type, bus number, or a duty!`)
  }
}

console.log(driverSignIn('Keagan'));
console.log(driverDuty);