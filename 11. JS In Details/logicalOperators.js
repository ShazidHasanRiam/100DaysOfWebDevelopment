const hasDriverLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("You are able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive");
} else {
  console.log("Someone else should drive");
}
