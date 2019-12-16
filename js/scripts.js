$(document).ready(function(){
    
  $('button#bbqcart').click(function(){

      var pizza = parseInt($('#bbqopt option:selected').val());
      var crust = parseInt($('#bbqcrust option:selected').val());
      var topping = parseInt($('#bbqtopping option:selected').val());

      var cartCost = pizza + crust + topping;

      $('table#list').append('<tr>'+'<td>'+ $("#bbqsteak").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
      
  });

  $('button#hawaiiancart').click(function(){

      var pizza = parseInt($('#hawaiopt option:selected').val());
      var crust = parseInt($('#hawaicrust option:selected').val());
      var topping = parseInt($('#hawaitopping option:selected').val());

      var cartCost = pizza + crust + topping;

      $('table#list').append('<tr>'+'<td>'+ $("#hawaiian").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
      
  });


  $('button#peripericart').click(function(){

      var pizza = parseInt($('#periopt option:selected').val());
      var crust = parseInt($('#pericrust option:selected').val());
      var topping = parseInt($('#peritopping option:selected').val());

      var cartCost = pizza + crust + topping;

      $('table#list').append('<tr>'+'<td>'+ $("#periperi").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
      
  });

  
  $('button#delivery').click(function(){
      $('#deliveryLocation').toggle();
  })
  

  $('button#check').click(function(){

      var deliverArea = $('input#location').val()
      
      if ($('input#location').val() !== ""){
          alert("Your pizza will be delivered to " + deliverArea);
      } else {
          alert("Kindly be at the pick up spot in 10 mins. ENJOY!");
      };
  });
     

  event.preventDefault();
}); 
