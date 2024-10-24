// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = ({ initialVelocity, acceleration, time }) => { 
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input. Parameters must be numbers.');
  }

  //initial velocity conversion from km/h to m/s  
  const initialVelocityInMps = initialVelocity / 3.6; 

  //velocity calculation
  const newVelocity = initialVelocityInMps + acceleration * time; 

  //convert new velocity back to km/h 
  const newVelocityInKmPerHour = newVelocity * 3.6; 

  return newVelocityInKmPerHour;
};

const newDistance = initialDistance + initialVelocity * (time / 3600) //calcultes new distance
const remainingFuel = initialFuel - fuelBurnRate * time //calculates remaining fuel
const newVelocity = calcNewVel({initialVelocity, acceleration, time}); //calculates new velocity based on acceleration

//Results in the console 
console.log(`New Velocity: Approximately ${newVelocity.toFixed(0)} km/h after correction.`);
console.log(`New Distance: Approximately ${newDistance.toFixed(0)} km after correction.`);
console.log(`Remaining Fuel: Approximately ${remainingFuel.toFixed(0)} kg after correction.`);