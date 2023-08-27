const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

inputTextRef.style.fontSize= `${inputRangeRef.value}px`;
 
const handleInput = (event) => {
  inputTextRef.style.fontSize = `${event.target.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);