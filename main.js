const userNumber = +prompt("Birinchi sonni kirting")
const userNumber2 = +prompt("Ikkinchi sonni kiriting")
let userChange = prompt("Amalni tanlang:\n 1.qo'shish\n 2.ayirish\n 3.bo'lish \n 4.ko'paytirish\n amalni tanlang:(1/2/3/4/)")
if (userChange === "1") {
    console.log(userNumber + userNumber2);
}
else if (userChange === "2") {
    console.log(userNumber - userNumber2);
} else if (userChange === "3") {
    console.log(userNumber / userNumber2);
}
else if (userChange === "4") {
    console.log(userNumber * userNumber2);
}

