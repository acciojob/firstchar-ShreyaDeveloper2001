function firstChar(text) {
  // your code here
	function firstChar(text) {
  // Remove leading and trailing spaces using trim()
  const trimmedText = text.trim();

  // Check if the trimmed text is empty or consists of only spaces
  if (trimmedText === "") {
    return "";
  }

  // Return the first character of the trimmed text
  return trimmedText[0];
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
