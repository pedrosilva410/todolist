const date = new Date()
const todayDate = date.toLocaleDateString('de-de');
document.getElementById("todayDate").innerHTML = todayDate;
console.log(todayDate);
