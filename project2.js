const fullName = " aline UWASE"; 

const trimedName = fullName.trim();
const separateName = trimedName.split(" ");
const sliced = trimedName.slice(0, 5);
const upperCase = trimedName.toUpperCase();
const lowerCase = trimedName.toLowerCase();
// const initials = trimedName.charAt(0) + trimedName.charAt(6);
const map = trimedName.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase()).join(".") + ".";
const userName = trimedName.trim().split(/\s+/).join(".").toLowerCase();
const length =



console.log(trimedName);
console.log(separateName);
console.log(sliced);
console.log(upperCase);
console.log(lowerCase);
console.log(map);

