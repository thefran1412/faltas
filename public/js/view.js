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
              setData(data);
          }
    });
});


console.log('printed from view.js');
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Nico", "Adrian", "Carlos", "Ignasi", "Fran"],
        datasets: [{
            label: '# of Votes',
            data: [4, 2, 1, 0, 0],
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

function setData(data) {
  console.log(JSON.parse(data));
  $(data).each(function(index) {
    console.log( index + ": " + $( this ).text() );
  });
}
