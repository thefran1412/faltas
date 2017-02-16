$('.falta').on('click', function(argument) {
  var cls = $(this).attr("class");
  var token = $('meta[name="_token"]').attr('content');

  var now = $(this);
    $.ajax({
          url:"http://localhost:8000/post",
          method:"POST",
          data:{id:cls},
          cache:"false",
          headers: {
                'X-CSRF-TOKEN': token
              },
          beforeSend:function() {
            console.log("ok");
          },
          success:function(data) {
              now.parent().children().find('h3').text(data);
          }
        });

});