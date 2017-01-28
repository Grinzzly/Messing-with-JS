$(document).ready(
  function(){
    function story (){
      $('#all').text($('li').length);
      $('#done').text($('.strike').length);
      localStorage.setItem('ToDoList',JSON.stringify(document.querySelector('ol').innerHTML));
    };

    $("input[name=ListItem]").keydown(function(e){
      if(e.keyCode == 13){
        e.preventDefault();
        $("#button").click();
      }
    });

    $('#button').click(function(){
      var toAdd = $('input[name=ListItem]').val();
      console.log('Пользователь ввёл '+toAdd);
      if (toAdd == '') {
        return false;
      }
      $('input[name=ListItem]').val('');
      $('<li>',{text : toAdd}).appendTo('ol');      
      story();
    });

    $('#button2').click(function(){
      $('li').each(function(){
        var crossed = $(this).hasClass('strike');
        if (crossed) {
          $(this).fadeOut('slow',function(){
            $(this).remove();
            story();
          });
        }
      })
    });

    $(document).on('dblclick','li', function(){
      var done = 0;
      $(this).toggleClass('strike');
      story();
    });

    $('input').focus(function() {
      $(this).val('');
    });

  $('ol').sortable();
  $('ol').on('change').html(JSON.parse(localStorage.getItem('ToDoList')));
  story();
  }
);
