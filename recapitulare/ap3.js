function trunecate(str, nr){
    return str.split(' ').slice(0, nr).join(' ');
}
console.log(trunecate("JavaScript este un limbaj de programare foarte usor de invatat.", 5));