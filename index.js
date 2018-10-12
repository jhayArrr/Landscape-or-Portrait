var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;

if (orientation === "landscape-primary") {
  console.log("landscape");
} else if (orientation === "landscape-secondary") {
  console.log("landscape!");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("portrait");
}
