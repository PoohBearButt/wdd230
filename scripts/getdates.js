const currentYear = new Date();
console.log(currentYear);
let chicken = currentYear.getFullYear();
console.log(chicken);



const dateModded = new Date(document.lastModified);
//let dateTrim = dateModded.getDate();
document.getElementById("lastModified").innerHTML = dateModded;


//let datePull = document.getElementById("lastModified");
//let currentMod = document.lastModified;
//datePull.innerHTML = currentMod;

document.getElementById("display").innerHTML = chicken;





