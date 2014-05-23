$(function() {
  console.log('ready');
  $('.project').click(function(e) {
    e.preventDefault();
    if($(this).hasClass('closed'))
      $(this).removeClass('closed');
    else
      $(this).addClass('closed');
  });
  $('.modal-link').click(function(e) {
    e.stopPropagation();
  });
});
