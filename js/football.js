var total_cost = 0
var funds_available

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
    var player_name = $('option:selected', $(this)).html();
    var player_cost = $('option:selected', $(this)).val();

    if(positionArray.indexOf(player_name) === -1 && positionArray.length < positionMax){ 
      positionArray.push(player_name);
      total_cost = total_cost + parseInt(player_cost)
      // funds_available = 1500 - total_cost
      if(total_cost < 1000){     

      $(positionClass).append('<div id=' + player_name + '>' + positionCode + player_name + ' £' + player_cost/10 + 'm' + '</div>' );
       
       $("#" + player_name + "").click(function() { 
        $(this).remove();
        positionArray.splice($.inArray(player_name, positionArray),1);
        console.log(goalkeeperArray)
        total_cost = total_cost - parseInt(player_cost)
        console.log(total_cost)
         $('.cost').text(total_cost/10 + 'm');
      });
      $('.cost').text(total_cost/10 + 'm');
      }
      } else {return false}
    });
};

goalkeeperArray = []; defenderArray = []; midfielderArray = []; forwardArray = []



populateTeam('.goalkeepers', goalkeeperArray, '.gk', 'GK: ', 2)
populateTeam('.defenders', defenderArray, '.def', 'DEF: ', 5)
populateTeam('.midfielders', midfielderArray, '.mid', 'MID: ', 5)
populateTeam('.forwards', forwardArray, '.fwd', 'FWD: ', 3)

