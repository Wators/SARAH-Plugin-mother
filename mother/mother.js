exports.action = function(data, next){  
  
  var url = 'https://apis.sen.se/v2/';
  var config = Config.modules.mother;
  var key = config.token;
  var cookie_Tp = data.cookieTp;
  var cookie_Bat = data.cookieBat;
  var type = data.type;
  
  if (!config.token){
    next({'tts' : 'Paramètre token invalide'});
    return;
  }

 // les uid des differents cookies pour le feels Température.

  if (cookie_Tp == 0){
    var cookie_Temperature_id = '';
  }else
    if (cookie_Tp == 1){
      var cookie_Temperature_id = 't$$$$$$$$$$$$$$$$$$$$9'; //well leche
    }else
      if (cookie_Tp == 2){
        var cookie_Temperature_id = 'D1t$$$$$$$$$$$$$$$$$$$$9E'; //subtle water
      }else
        if (cookie_Tp == 3){
          var cookie_Temperature_id = 'wt$$$$$$$$$$$$$$$$$$$$9J'; //happy hope
        }else
          if (cookie_Tp == 4){
            var cookie_Temperature_id = 'Gt$$$$$$$$$$$$$$$$$$$$9C'; //perfect carnival
          }

 // les uid des differents cookies pour le feels Batery


  if (cookie_Bat == 0){
    var cookie_Batery_id = '';
  }else
    if (cookie_Bat == 1){
      var cookie_Batery_id = 'Rt$$$$$$$$$$$$$$$$$$$$93'; //well leche
    }else
      if (cookie_Bat == 2){
        var cookie_Batery_id = 'Dt$$$$$$$$$$$$$$$$$$$$9E'; //subtle water
      }else
        if (cookie_Bat == 3){
          var cookie_Batery_id = 'wt$$$$$$$$$$$$$$$$$$$$9KJ'; //happy hope
        }else
          if (cookie_Bat == 4){
            var cookie_Batery_id = 'Gwt$$$$$$$$$$$$$$$$$$$$94KSC'; //perfect carnival
          }


  if (type == 0){
    var type_id = 'nodes/';
  }else
    if (type == 1){
      var type_id = 'feeds/'+cookie_Temperature_id+'/events/?limit=1';
    }else
      if (type == 2){
        var type_id = 'feeds/'+cookie_Batery_id+'/events/?limit=1';
      }   

  // 1. On requete l'information
  getFeeds(url, key, cookie_Temperature_id, cookie_Batery_id, type_id, function(json){
       
       var degree = -100; // on créé la variable pour plus tard
       var volt = -100;


       // 2.  On traite le JSON
       if (json){

           // Pas testé ton code
           if (type == 0) {
            label = json.objects[0].label
           }else
           if (type == 1){ 
            degree = json.objects[0].data.centidegreeCelsius
           // Je sais pas cette valeur ? 1809
           //degree = degree / 100
           degree = Math.round((degree / 100)*10)/10
          }else
          if (type == 2){
            volt = json.objects[0].data.levelMillivolt
            if (volt >= 2950) {volt = '100 % Batery is full'}
              else if (volt >= 2000) {volt = '85 %'}
                else if (volt > 1500) {volt = '65 %'}
                  else if (volt = 1500) {volt = '50 %'}
                    else if (volt > 500) {volt = '20 %'} 
          }
       }

       // 3. On pourrait aussi se casser en vocalisant le résutlat
      if (type == 0){
        var tts = label;
      }else
        if (type == 1){
          var tts = (degree == -100) ? 'je ne sais pas' : ('il fait '+degree+'°C');
        }else
          if (type == 2){
            var tts = (volt == -100) ? 'je ne sais pas' : ('il fait '+volt);
          }

      next({
          "tts" : tts,
          "json" : json
      })

   });

}
/**
  *  Comme son nom l'indique on retour le JSON 
  *  des Nodes
  */
  var getFeeds = function(token, key, cookie_Temperature_id, cookie_Batery_id, type_id, callback) {
  
  var API_URL = 'https://apis.sen.se/v2/';

  var data = {
    'resource__type': 'device',
    'resource__slug': 'cookie'
  }

  var headers = { 'Authorization'  : 'Token '+key }
  var request = require('request');  
  
  request.get({ 'uri' : API_URL+type_id, 'qs' : data, 'headers' : headers }, function (err, response, body){

    // 1. En cas d'erreur on retourne false
    if (err || response.statusCode != 200) {
      error('Error'); return callback(false); 
   }
  
   // 2. Sinon on parse le body
    var json = JSON.parse(body);
   console.log('JSON', json.objects);
    // Et on retourne le JSON
    callback(json);

  });
}
