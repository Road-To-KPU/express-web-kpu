jQuery(document).ready(function () {
  jQuery(function () {
    jQuery(this).bind("contextmenu", function (event) {
      event.preventDefault();
    });
  });
});
