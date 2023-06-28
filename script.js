function calculateDays() {
    var inputWeeks = document.getElementById("inputWeeks").value;
    dayjs.locale("id");
    var currentDate = dayjs();
    var calculatedDate = currentDate.subtract(inputWeeks * 7, "day");

    var resultElement = document.getElementById("resultDays");
    resultElement.innerHTML = "Hasil: " + calculatedDate.format("dddd, DD MMMM YYYY");
}

function calculateMonths() {
    var inputMonths = document.getElementById("inputMonths").value;
    dayjs.locale("id");
    var currentDate = dayjs();
    var calculatedDate = currentDate.subtract(inputMonths, "month");

    var resultElement = document.getElementById("resultMonths");
    resultElement.innerHTML = "Hasil: " + calculatedDate.format("dddd, DD MMMM YYYY");
}

function calculateYears() {
    var inputYears = document.getElementById("inputYears").value;
    dayjs.locale("id");
    var currentDate = dayjs();
    var calculatedDate = currentDate.subtract(inputYears, "year");

    var resultElement = document.getElementById("resultYears");
    resultElement.innerHTML = "Hasil: " + calculatedDate.format("dddd, DD MMMM YYYY");
}
