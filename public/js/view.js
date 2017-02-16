$( document ).ready(function() {
	var cls = $(this).attr("class");
	var token = $('meta[name="_token"]').attr('content');
	var now = $(this);
    $.ajax({
          url:"http://localhost:8000/data",
          method:"POST",
          data:{id:'hola'},
          cache:"false",
          headers: {
                'X-CSRF-TOKEN': token
              },
          beforeSend:function() {
            console.log("ok");
          },
          success:function(data) {
              var array = setData(data);
              createChart(array, 'myChart');
          }
    });
});


console.log('printed from view.js');


function setData(data) {
  return JSON.parse(data);
}

function createChart(array, targetid) {
  
  var labels = [];
  var data = [];
  //for each row returns data
  array.forEach(function(value) {

    var pos = labels.indexOf(value.nombre);
    var count = parseInt(value.count);

    if (pos == -1) {

      labels.push(value.nombre);
      data.push(count);

      if (value.is_grave == 1) {

          count = count*3;
      }
      
    } else {
      
      data[pos] = data[pos]+count;
    }
    
  });
  var ctx = document.getElementById(targetid);
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Faltas totales',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      fullWidth: true
    }
});
}