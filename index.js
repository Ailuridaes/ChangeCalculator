$(function(){
  $("#calculate").click(function() {
    var change = $("#received").val() - $("#saleTotal").val();

    $("#dollars").text(Math.floor(change));
    change = Math.round(change % 1 * 100);
    $("#quarters").text(Math.floor(change / 25));
    change %= 25;
    $("#dimes").text(Math.floor(change/10));
    change %= 10;
    $("#nickels").text(Math.floor(change/5));
    $("#pennies").text(Math.floor(change % 5));
  });
});
