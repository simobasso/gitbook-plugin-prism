
function loadCode() {
  $('code').each(function() {
    var html = $(this).attr('data-html');
    $(this).html(html);
  });
}

$(document).ready(function() {
  loadCode();

  gitbook.events.bind('page.change', loadCode);
});
