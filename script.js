(function(){
  var message = `
******************************
*    Engineered in México    *
******************************
`;
  var style = [
    "background: url(./mexico.png) no-repeat",
    "background-size: cover",
    "background-position: center",
    "line-height: 70px"
  ].join(";");

  //flag
  console.log("%c                              ", style);
  //text
  console.log("%c " + message, "color: green");
})();
