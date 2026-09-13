const addressLat = 10;
const addressLong = 0;
const positionLat = 100;
const positionLong = 50;

const distLat = (addressLat - positionLat) ** 2;
const distLong = (addressLong - positionLong) ** 2;

const dist = (distLat + distLong) ** (1 / 2);

console.log(dist);
