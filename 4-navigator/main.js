const addressLat = 10;
const addressLong = 0;
const positionLat = 100;
const positionLong = 50;

const dist =
  ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) / 2;

console.log(dist);
