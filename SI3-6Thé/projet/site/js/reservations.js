var init = function () {
  getFlightsUser();
  $('#btnLogout').click(() => logout());
  $('#btnBook').click(() => getInfo());
};

var getFlightsUser = function () {
  const sToken = localStorage.getItem('auth_token');
  $.ajax({
    url: "http://localhost:8080/........", //user/flights
    type: 'get',
    headers: {"Authorization": "Bearer " + sToken},
    success : function (result){
    if (result){
      for(let i = 0; i < result.length; i++){
          const sCodeFlightId = result[i].flightId;
          const sCodeDep = result[i].departureAirport;
          const sCodeDest = result[i].arrivalAirport;
          const sDate = result[i].date;
          const sPrice = result[i].price;
      }
    }
    }
  })
}

var logout = function () {
  localStorage.setItem('auth_token', '');
  localStorage.setItem('Id', '');
  location.href = "index.html";
};

var getInfo = function () {
  let sCodeDep = $(this).closest("tr").find(".codeDep").text();
  let sCodeDest = $(this).closest("tr").find(".codeDest").text();
  let sDate = $(this).closest("tr").find(".date").text();
  let sPrice = $(this).closest("tr").find(".price").text();
  return {
    codeDep: sCodeDep,
    codeDest: sCodeDest,
    date: sDate,
    price: sPrice
  }
}

$(document).ready(function () {
  init();
});
