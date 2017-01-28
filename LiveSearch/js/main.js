jQuery(document).ready(function($){
  $('.live-search-list li').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
  });

  $('.live-search-box').on('keyup', function(){
    var searchTerm = $(this).val().toLowerCase();
    $('.live-search-list li').each(function(){
      if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
        $(this).show();
      }else{
        $(this).hide();
      }
    });
  });

  $("input[class=live-search-box]").keydown(function(e){
    if(e.keyCode == 13){
      e.preventDefault();
      var toAdd = $('input[class=live-search-box]').val();
      console.log('Пользователь ввёл '+toAdd);
      if (toAdd == '') {
        return false;
      }
      $('ul').append('<li>' + toAdd + '</li>');
      $('input[class=live-search-box]').val('');
    }
  });

  $(document).on('dblclick','li', function(){
    $(this).fadeOut('slow',function(){
      $(this).remove();
    });
  });

});
