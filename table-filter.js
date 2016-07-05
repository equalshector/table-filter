$(".table-filter").keyup(function () {
    jQuery.expr[':'].contains = function(a, i, m) {
      return jQuery(a).text().toLowerCase()
          .indexOf(m[3].toLowerCase()) >= 0;
    };

    //split the current value of searchInput
    var data = this.value.toLowerCase().split(" ");

    data = data.filter(function(v){return v!==''});

    //create a jquery object of the rows
    var jo = $('.search-table tr').not('.search-table tr:first');
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);

        var contain = true;
        for (var d = 0; d < data.length; ++d) {

            if(contain == true){
                if ($t.is(":contains('" + data[d] + "')")) {
                    contain = true;
                }
                else {
                    contain = false;
                }
            }
        }
        return contain;
    })
    //show the rows that match.
    .show();
}).focus(function () {
    this.value = "";
    $(this).css({
        "color": "black"
    });
    $(this).unbind('focus');
}).css({
    "color": "#C0C0C0"
});
