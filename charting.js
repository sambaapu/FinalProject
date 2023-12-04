// charting.js

$(document).ready(function () {
    // Fetch data from JSON file using jQuery AJAX
    $.ajax({
        url: 'Matches.json',
        dataType: 'json',
        success: function (data) {
            // Prepare data for the line chart
            var labelsLine = data[0].labels;
            var valuesLine = data[0].values;
            console.log(data[0].labels)

            // Create a line chart
            var ctxLine = $("#lineChart")[0].getContext('2d');
            var lineChart = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: labelsLine,
                    datasets: [{
                        label: 'Line Chart Example',
                        data: valuesLine,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        fill: false
                    }]
                }
            });

        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments',
        dataType: 'json',
        success: function (data) {
            var valuesLine = [data[0].id, data[1].id, data[2].id, data[3].id];
            console.log(data[0].id)

            var ctxLine = $("#barChart")[0].getContext('2d');
            var lineChart = new Chart(ctxLine, {
                type: 'bar',
                data: {
                    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
                    datasets: [{
                        label: 'Points',
                        data: valuesLine,
                        backgroundColor: ['#e74c3c', '#2ecc71', '#f39c12', '#3498db'],
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        fill: false
                    }]
                }
            });

        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/Users',
        dataType: 'json',
        success: function (data) {
            var valuesLine = [10*data[0].id, 10*data[1].id, 5*data[2].id];
            console.log(valuesLine)

            var ctxLine = $("#pieChart")[0].getContext('2d');
            var pieChart = new Chart(ctxLine, {
                type: 'pie',
                data: {
                    labels: ['Win', 'Loss', 'Draw'],
                    datasets: [{
                        data: valuesLine,
                        backgroundColor: ['#2ecc71', '#e74c3c', '#f39c12']
                    }]
                }
            });

        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
});
