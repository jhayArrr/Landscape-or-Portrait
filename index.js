var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;

if (orientation === "landscape-primary") {
  console.log("The screen is in landscape");
} else if (orientation === "landscape-secondary") {
  console.log("The screen is in landscape");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("The screen is in Portrait");
}
