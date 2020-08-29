document.addEventListener('DOMContentLoaded', function()
{
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [ 'a', 'b', 'c', 'd' ],
                datasets: [{
                backgroundColor: [
                    "#59be5b",
                    "#d56328",
                    "#ff1b2d",
                    "#0078d7"
                ],
                data: [ 1, 2, 3, 4 ]
            }]
        }
    });

    document.getElementById('test').textContent = 'SUCCEED';


    fetch('http://127.0.0.1:5000')
  .then(response => response.json())
  .then(data => {console.log(data.internet.data.values); document.getElementById('test').textContent = data.internet.data.values.normal.cant;});
});