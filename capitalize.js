function capitalize(string) {
 const slicedString = string.slice("").charAt(0).toUpperCase()
 const restOfString = string.slice(1);
 return slicedString + restOfString;
}


module.exports = capitalize;