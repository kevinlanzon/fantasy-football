var total_cost = 0
for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
        var str = "." + data.type_name.toLowerCase() + "s"
        $(str).append(
          $('<option></option>').html(data.web_name).val(data.now_cost));
    });
};

function populateTeam(selectorClass, positionArray, positionClass, positionCode, positionMax){
   $(selectorClass).change(function() {
    var player = $('option:selected', $(this)).html();
    var cost = $('option:selected', $(this)).val();

    if(positionArray.indexOf(player) === -1 && positionArray.length < positionMax){
      positionArray.push(player);
      cost = parseInt(cost)
      total_cost = total_cost + cost
      $(positionClass).append(positionCode + positionArray[positionArray.length-1] + ' £' + cost/10 +'<br />');
      $('.cost').text(total_cost/10 + 'm');
      } else {return false}
    });
};

goalkeeperArray = []; defenderArray = []; midfielderArray = []; forwardArray = []

populateTeam('.goalkeepers', goalkeeperArray, '.gk', 'GK: ', 2)
populateTeam('.defenders', defenderArray, '.def', 'DEF: ', 5)
populateTeam('.midfielders', midfielderArray, '.mid', 'MID: ', 5)
populateTeam('.forwards', forwardArray, '.fwd', 'FWD: ', 3)