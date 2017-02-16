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
    //take the position of where
    console.log(value);
    var pos = labels.indexOf(value.nombre);
    if (pos == -1) {
      labels.push(value.nombre);
      // pos = labels.indexOf(value.nombre);
    }
    //insert name on values array
    var count = parseInt(value.count);
    if (value.is_grave == 1) {
      //console.log('entered');
      count = count*3;
    }
    if (pos == -1) {
      data.push(count);
    } 
    else {
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