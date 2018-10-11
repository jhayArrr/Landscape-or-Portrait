function isLandscape (___, ___) {
  if (window.innerheight == window.innerwidth) return 'Square'; //must be first, return will not allow rest of code to run
  return (window.innerwidth > window.innerheight) ? 'Landscape' : 'Portrait'; //returns the value of the expression
}

let window.innerwidth= 4;
let window.innerheight = 3;

console.log("This display geometry is", isLandscape (window.innerwidth, window.innerheight)); //Difference between calling functions with arguements and sending to parameter's, local variables
