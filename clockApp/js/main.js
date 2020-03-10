function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
};

function startTime() {
    var currentTime = new Date();

    var year = currentTime.getFullYear();
    var month = currentTime.getMonth();
    var day = currentTime.getDay();
    var date = currentTime.getDate();
    // var dayContent = "";

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    if (hour > 12) {
        hour = hour - 12;
    };

    minute = checkTime(minute);
    second = checkTime(second);
    month = checkTime(month + 1);

    // DAY CONTENT

    var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    document.getElementById('time').textContent = hour + ":" + minute + ":" + second;
    document.getElementById('date').textContent = month + "-" + date + "-" + year + " " + days[day];

    setTimeout(startTime, 1000);
};

document.getElementById('date').addEventListener('onload', startTime(), false);
document.getElementById('time').addEventListener('onload', startTime(), false);
