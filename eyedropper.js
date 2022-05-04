let openBtn = document.querySelector("#open");
let hexCode = document.querySelector("#hexcode");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const eyeDropper = new EyeDropper();
  const result = eyeDropper.open();
  result.then( function(result) {
    hexCode.innerHTML = result.sRGBHex;
  } );
});
