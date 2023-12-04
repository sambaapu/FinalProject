document.addEventListener("DOMContentLoaded", function () {
    drawLineChart();
    drawBarChart();
    drawPieChart();
});

function drawLineChart() {
    var canvas = document.getElementById("lineChart");
    var ctx = canvas.getContext("2d");

    var data = [10, 20, 15, 25, 30];
    var spacing = canvas.width / (data.length + 1);

    ctx.beginPath();
    ctx.moveTo(spacing, canvas.height - data[0]);

    for (var i = 1; i < data.length; i++) {
        ctx.lineTo((i + 1) * spacing, canvas.height - data[i]);
    }

    ctx.stroke();
}

function drawBarChart() {
    var canvas = document.getElementById("barChart");
    var ctx = canvas.getContext("2d");

    var data = [10, 20, 15, 25, 30];
    var spacing = canvas.width / (data.length + 1);

    for (var i = 0; i < data.length; i++) {
        ctx.fillRect((i + 1) * spacing - 15, canvas.height - data[i], 30, data[i]);
    }
}

function drawPieChart() {
    var canvas = document.getElementById("pieChart");
    var ctx = canvas.getContext("2d");

    var data = [10, 20, 15, 25, 30];
    var total = data.reduce((acc, value) => acc + value, 0);
    var startAngle = 0;

    for (var i = 0; i < data.length; i++) {
        var sliceAngle = (data[i] / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 3, startAngle, startAngle + sliceAngle);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        startAngle += sliceAngle;
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
