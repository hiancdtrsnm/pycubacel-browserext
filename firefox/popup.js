function round(number, digits=2){
    if (typeof number === 'string' || number instanceof String){
        return number;
    }
    return Math.round((number+Number.EPSILON)*10**digits)/10**digits;
}

document.addEventListener('DOMContentLoaded', function()
{
    /*var ctx = document.getElementById("chart").getContext('2d');
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

    document.getElementById('test').textContent = 'SUCCEED';*/


    fetch('http://127.0.0.1:5000')
    .then(response => response.json())
    .then(data => {
        console.log(data.internet.data.values);
        document.getElementById('lteo').textContent = data.internet.data.values.only_lte.cant+" MB";
        document.getElementById('lteod').textContent = round(data.internet.data.values.only_lte.delta);
        document.getElementById('an').textContent = data.internet.data.values.all_networks.cant+" MB";
        document.getElementById('and').textContent = round(data.internet.data.values.all_networks.delta);
        document.getElementById('lteb').textContent = data.internet.data.values.lte.cant+" MB";
        document.getElementById('ltebd').textContent = round(data.internet.data.values.lte.delta);
        document.getElementById('nb').textContent = data.internet.data.values.national_data.cant+" MB";
        document.getElementById('nbd').textContent = round(data.internet.data.values.national_data.delta);
        document.getElementById('pb').textContent = data.internet.data.values.promotional_data.cant+" MB";
        document.getElementById('pbd').textContent = round(data.internet.data.values.promotional_data.delta);

        document.getElementById('cerdit').textContent = data.internet.credit.values.credit_normal.cant;
        document.getElementById('cerditd').textContent = round(data.internet.credit.values.credit_normal.delta);
        document.getElementById('cerditb').textContent = data.internet.credit.values.credit_bonus.cant;
        document.getElementById('cerditbd').textContent = round(data.internet.credit.values.credit_bonus.delta);
        document.getElementById('min').textContent = data.internet.others.values.minutes.cant;
        document.getElementById('mind').textContent = round(data.internet.others.values.minutes.delta);
        document.getElementById('sms').textContent = data.internet.others.values.sms.cant;
        document.getElementById('smsd').textContent = round(data.internet.others.values.sms.delta);
        console.log(data.internet.credit.values.credit_normal.cant);
        console.log(data.internet.credit.values.credit_bonus.cant);
        //document.getElementById('test').textContent = data.internet.data.values.normal.cant+'  delta='+round(data.internet.data.values.normal.delta);
    });
});