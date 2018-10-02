var totalHours = 0;
var totalMoney = 0;
var hourly = 0;

var names = document.getElementById("names");
var hours = document.getElementById("hours");
var money = document.getElementById("money");

var tips = [];

function getTips() {
    for (i = 0; i < hours.length; i++) {
        totalHours += Number(hours.elements[i].value);
    }
    for (i = 0; i < money.length; i++) {
        totalMoney += Number(money.elements[i].value);
    }
    hourly = totalMoney / totalHours;
}

function displayData() {
    getTips();

    var text = "~ ";

    for (i = 0; i < hours.length; i++) {
        tips.push(Number(hours.elements[i].value) * hourly);
    }

    for (i = 0; i < names.length; i++) {
        if (names.elements[i].value) {
            text +=names.elements[i].value + " = " + tips[i].toFixed(2) + " ~ ";
        }
   }
    text +="<br>" + "Total tips = " + totalMoney + "<br>" + "Total hours = " + totalHours + "<br>" + "Hourly tips = " + hourly.toFixed(2);

    document.getElementById("results").innerHTML = text;

    totalMoney = 0;
    totalHours = 0;
    hourly = 0;
    tips = [];
}
