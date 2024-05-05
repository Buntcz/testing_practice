function caesarCipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = {};
  let result = "";

  for(let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = i + shift;
    if(map[alphabet[i]] > 25) {
        map[alphabet[i]] -= 26
    }
  }

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if(char !== " "){
        result += alphabet[map[str[i]]];
    } else {
        result += " ";
    }
  }
  return result;
}

module.exports = caesarCipher;