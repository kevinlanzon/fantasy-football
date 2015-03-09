for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
      if(data.type_name === "Goalkeeper") {
      $('.goalkeepers').append(
        $('<option></option>').val(data.web_name, data.now_cost).html(data.web_name)
        );
      console.log(data)
      player_cost = data.now_cost
      console.log(player_cost)
    }
    else {
      return false
    }
    });
};

for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
      if(data.type_name === "Defender") {
      $('.defenders').append(
        $('<option></option>').val(data.web_name).html(data.web_name)
        );
    }
    else {
      return false
    }
    });
};

for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
      if(data.type_name === "Midfielder") {
      $('.midfielders').append(
        $('<option></option>').val(data.web_name).html(data.web_name)
        );
    }
    else {
      return false
    }
    });
};

for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
      if(data.type_name === "Forward") {
      $('.forwards').append(
        $('<option></option>').val(data.web_name).html(data.web_name)
        );
    }
    else {
      return false
    }
    });
};

goalkeeperArray = []

 $('.goalkeepers').change(function() {
    var player = $('option:selected', $(this)).val();
    if(goalkeeperArray.indexOf(player) === -1 && goalkeeperArray.length < 2){
    goalkeeperArray.push(player);
  $('.gk').append('GK: ' + goalkeeperArray[goalkeeperArray.length-1] + '£' + player_cost + '<br />');
  }
  else {
    return false
  }
  });

 defenderArray = []
  $('.defenders').change(function() {
    var player = $('option:selected', $(this)).text();
    if(defenderArray.indexOf(player) === -1 && defenderArray.length < 5){
    defenderArray.push(player);
  $('.def').append('DEF: ' + defenderArray[defenderArray.length-1] + '<br />');
  }
  else {
    return false
  }
  });


  midfielderArray = []
    $('.midfielders').change(function() {
    var player = $('option:selected', $(this)).text();
    if(midfielderArray.indexOf(player) === -1 && midfielderArray.length < 5){
    midfielderArray.push(player);
  $('.mid').append('MID: ' + midfielderArray[midfielderArray.length-1] + '<br />');
  }
  else {
    return false
  }
  });

  forwardArray = []
    $('.forwards').change(function() {
    var player = $('option:selected', $(this)).text();
    if(forwardArray.indexOf(player) === -1 && forwardArray.length < 3){
    forwardArray.push(player);
  $('.fwd').append('FWD: ' + forwardArray[forwardArray.length-1] + '<br />');
  }
  else {
    return false
  }
  });


