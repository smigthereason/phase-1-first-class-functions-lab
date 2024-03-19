const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(2, 4);
}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];
function createFareMultiplier(integer) {
  return function(fare) {
      return fare * integer;
  };
}

const fareMultiplier = createFareMultiplier(4);
const fare = 10;
const quadrupledFare = fareMultiplier(fare);
console.log(quadrupledFare); 

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
  return selectingFunction(arrayOfDrivers);
}
const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers); 
