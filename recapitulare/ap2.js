let str = "mere"
function palindrom(str) {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == str[str.length - 1 - i]) {
      if(i == str.length){
        return true;
      }
    } else {
      return false;
    }
  }
}


console.log(palindrom(str));




