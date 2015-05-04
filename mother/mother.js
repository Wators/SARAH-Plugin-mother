exports.action = function(data, next){  

/**variables*/ 
  var url = 'https://apis.sen.se/v2/';
  var config = Config.modules.mother;
  var key = config.token;
  // COOKIES
  var cookieid1 = config.cookie_id1;
  var cookieid2 = config.cookie_id2;
  var cookieid3 = config.cookie_id3;
  var cookieid4 = config.cookie_id4;
  
  // Feeds Par Cookies
  // Cookie 1
  var cookieid1MOT = config.cookie_id1_MOT;
  var cookieid1PRE = config.cookie_id1_PRE;
  var cookieid1BAT = config.cookie_id1_BAT;
  var cookieid1ALE = config.cookie_id1_ALE;
  var cookieid1TP = config.cookie_id1_TP;

  // Cookie 2
  var cookieid2MOT = config.cookie_id2_MOT;
  var cookieid2PRE = config.cookie_id2_PRE;
  var cookieid2BAT = config.cookie_id2_BAT;
  var cookieid2ALE = config.cookie_id2_ALE;
  var cookieid2TP = config.cookie_id2_TP;

  // Cookie 3
  var cookieid3MOT = config.cookie_id3_MOT;
  var cookieid3PRE = config.cookie_id3_PRE;
  var cookieid3BAT = config.cookie_id3_BAT;
  var cookieid3ALE = config.cookie_id3_ALE;
  var cookieid3TP = config.cookie_id3_TP;

  // Cookie 4
  var cookieid4MOT = config.cookie_id4_MOT;
  var cookieid4PRE = config.cookie_id4_PRE;
  var cookieid4BAT = config.cookie_id4_BAT;
  var cookieid4ALE = config.cookie_id4_ALE;
  var cookieid4TP = config.cookie_id4_TP;
  
  
  var cookies = data.cookieid;
  var cookie_Tp = data.cookieTp;
  var cookie_Bat = data.cookieBat;
  var cookie_Mot = data.cookieMot;
  var cookie_Pre = data.cookiePre;
  var cookie_Ale = data.cookieAle;
  var type = data.type;
  
  if (!config.token){
    next({'tts' : 'Paramètre token invalide'});
    return;
  }

  if (!config.token){
    next({'tts' : 'Paramètre token invalide'});
    return;
  }

/** les uid des cookies */

  if (cookies == 1){
    var cookie_node_id = cookieid1;
  }else 
    if (cookies == 2){
      var cookie_node_id = cookieid2;
    }else
      if (cookies == 3){
        var cookie_node_id = cookieid3;
      }else
        if (cookies == 4){
          var cookie_node_id = cookieid4;
        }


/** les uid des differents cookies pour le feeds Température.*/

  if (cookie_Tp == 0){
    var cookie_Temperature_id = '';
  }else
    if (cookie_Tp == 1){
      var cookie_Temperature_id = cookieid1TP; //well leche
    }else
      if (cookie_Tp == 2){
        var cookie_Temperature_id = cookieid2TP; //subtle water
      }else
        if (cookie_Tp == 3){
          var cookie_Temperature_id = cookieid3TP; //happy hope
        }else
          if (cookie_Tp == 4){
            var cookie_Temperature_id = cookieid4TP; //perfect carnival
          }

/** les uid des differents cookies pour le feels Battery*/

  if (cookie_Bat == 0){
    var cookie_Batery_id = '';
  }else
    if (cookie_Bat == 1){
      var cookie_Batery_id = cookieid1BAT; //well leche
    }else
      if (cookie_Bat == 2){
        var cookie_Batery_id = cookieid2BAT; //subtle water
      }else
        if (cookie_Bat == 3){
          var cookie_Batery_id = cookieid3BAT; //happy hope
        }else
          if (cookie_Bat == 4){
            var cookie_Batery_id = cookieid4BAT; //perfect carnival
          }

/** les uid des differents cookies pour le feeds Motion*/

  if (cookie_Mot == 0){
    var cookie_Motion_id = '';
  }else
    if (cookie_Mot == 1){
      var cookie_Motion_id = cookieid1MOT; //well leche
    }else
      if (cookie_Mot == 2){
        var cookie_Motion_id = cookieid2MOT; //subtle water
      }else
        if (cookie_Mot == 3){
          var cookie_Motion_id = cookieid3MOT; //happy hope
        }else
          if (cookie_Mot == 4){
            var cookie_Motion_id = cookieid4MOT; //perfect carnival
          }

/** les uid des differents cookies pour le feeds Prescence*/

  if (cookie_Pre == 0){
    var cookie_Prescense_id = '';
  }else
    if (cookie_Pre == 1){
      var cookie_Prescense_id = cookieid1PRE; //well leche
    }else
      if (cookie_Pre == 2){
        var cookie_Prescense_id = cookieid2PRE; //subtle water
      }else
        if (cookie_Pre == 3){
          var cookie_Prescense_id = cookieid3PRE; //happy hope
        }else
          if (cookie_Pre == 4){
            var cookie_Prescense_id = cookieid4PRE; //perfect carnival
          }

/** les uid des differents cookies pour le feeds Alert*/

  if (cookie_Ale == 0){
    var cookie_Alert_id = '';
  }else
    if (cookie_Ale == 1){
      var cookie_Alert_id = cookieid1ALE; //well leche
    }else
      if (cookie_Ale == 2){
        var cookie_Alert_id = cookieid2ALE; //subtle water
      }else
        if (cookie_Ale == 3){
          var cookie_Alert_id = cookieid3ALE; //happy hope
        }else
          if (cookie_Ale == 4){
            var cookie_Alert_id = cookieid4ALE; //perfect carnival
          }

/**Partie de la request*/

  if (type == 0){
    var type_id = 'nodes/';
  }else
    if (type == 1){
      var type_id = 'feeds/'+cookie_Temperature_id+'/events/?limit=1';
    }else
      if (type == 2){
        var type_id = 'feeds/'+cookie_Batery_id+'/events/?limit=1';
      }else
        if (type == 3){
          var type_id = 'nodes/'+cookie_Motion_id+'/events/?limit=1';
        }else
          if (type == 4){
            var type_id = 'nodes/'+cookie_Prescense_id+'/events/?limit=1';
          }else
            if (type == 5){
              var type_id = 'nodes/'+cookie_Alert_id+'/events/?limit=1';
            }else
              if (type == 6){
                var type_id = 'nodes/'+cookie_node_id+'/';
        }

  // 1. On requete l'information
  getFeeds(url, key, cookie_node_id, cookie_Temperature_id, cookie_Batery_id, cookie_Motion_id, cookie_Prescense_id, cookie_Alert_id, type_id, function(json){
       
       var degree = -100; // on créé la variable pour plus tard
       var volt = -100;


       // 2.  On traite le JSON
       if (json){

           // Pas testé ton code
           if (type == 0) {
            var label = ',\n      "cookie_id1" : "'+json.objects[0].uid +'",\n      '
                      + '"cookie_id2" : "'+json.objects[1].uid +'",\n      '
                      + '"cookie_id3" : "'+json.objects[2].uid +'",\n      '
                      + '"cookie_id4" : "'+json.objects[3].uid +'",\n      ';

            //Mise à jour Prop avec les Id des cookies
    
            var fileXML = 'plugins/mother/mother.prop';
            var xml = fs.readFileSync(fileXML, 'utf8');
            replace = '"token"     : ""';
            replace += label ;
            replace += '"cookie_id1_MOT"';
            var regexp = new RegExp('"token"     : ""[^*]+"cookie_id1_MOT"', 'gm');
            var xml = xml.replace(regexp, replace);
            fs.writeFileSync(fileXML, xml, 'utf8');

           }else
             if (type == 1){ 
              degree = json.objects[0].data.centidegreeCelsius
           // Je sais pas cette valeur ? 1809
           //degree = degree / 100
<<<<<<< Updated upstream
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
=======
              degree = Math.round((degree / 100)*10)/10
             }else
               if (type == 2){
                volt = json.objects[0].data.levelMillivolt
                  if (volt >= 2950) {volt = '100 % Batery is full'}
                    else if (volt >= 2000) {volt = '85 %'}
                      else if (volt > 1500) {volt = '65 %'}
                        else if (volt = 1500) {volt = '50 %'}
                          else if (volt > 500) {volt = '20 %'} 
               }else
                 if (type == 6){
                  if (cookies == 1){
                  var feeds = json.publishes[0].uid+'",\n      '
                            + '"cookie_id1_PRE" : "'+json.publishes[1].uid+'",\n      '
                            + '"cookie_id1_BAT" : "'+json.publishes[2].uid+'",\n      '
                            + '"cookie_id1_ALE" : "'+json.publishes[3].uid+'",\n      '
                            + '"cookie_id1_TP" : "'+json.publishes[4].uid+'",\n      ';

                            //Mise à jour Prop avec les Uid Feeds du cookie 1

                  var fileXML = 'plugins/mother/mother.prop';
                  var xml = fs.readFileSync(fileXML, 'utf8');
                  replace = '"cookie_id1_MOT" : "';
                  replace += feeds ;
                  replace += '"cookie_id2_MOT"';
                  var regexp = new RegExp('"cookie_id1_MOT" : "[^*]+"cookie_id2_MOT"', 'gm');
                  var xml = xml.replace(regexp, replace);
                  fs.writeFileSync(fileXML, xml, 'utf8');
                    }else if (cookies == 2){
                    var feeds = json.publishes[0].uid+'",\n      '
                            + '"cookie_id2_PRE" : "'+json.publishes[1].uid+'",\n      '
                            + '"cookie_id2_BAT" : "'+json.publishes[2].uid+'",\n      '
                            + '"cookie_id2_ALE" : "'+json.publishes[3].uid+'",\n      '
                            + '"cookie_id2_TP" : "'+json.publishes[4].uid+'",\n      ';

                            //Mise à jour Prop avec les Uid Feeds du cookie 2

                    var fileXML = 'plugins/mother/mother.prop';
                    var xml = fs.readFileSync(fileXML, 'utf8');
                    replace = '"cookie_id2_MOT" : "';
                    replace += feeds ;
                    replace += '"cookie_id3_MOT"';
                    var regexp = new RegExp('"cookie_id2_MOT" : "[^*]+"cookie_id3_MOT"', 'gm');
                    var xml = xml.replace(regexp, replace);
                    fs.writeFileSync(fileXML, xml, 'utf8');
                      }else if (cookies == 3){
                      var feeds = json.publishes[0].uid+'",\n      '
                            + '"cookie_id3_PRE" : "'+json.publishes[1].uid+'",\n      '
                            + '"cookie_id3_BAT" : "'+json.publishes[2].uid+'",\n      '
                            + '"cookie_id3_ALE" : "'+json.publishes[3].uid+'",\n      '
                            + '"cookie_id3_TP" : "'+json.publishes[4].uid+'",\n      ';

                            //Mise à jour Prop avec les Uid Feeds du cookie 3

                      var fileXML = 'plugins/mother/mother.prop';
                      var xml = fs.readFileSync(fileXML, 'utf8');
                      replace = '"cookie_id3_MOT" : "';
                      replace += feeds ;
                      replace += '"cookie_id4_MOT"';
                      var regexp = new RegExp('"cookie_id3_MOT" : "[^*]+"cookie_id4_MOT"', 'gm');
                      var xml = xml.replace(regexp, replace);
                      fs.writeFileSync(fileXML, xml, 'utf8');
                        }else if (cookies == 4){
                        var feeds = json.publishes[0].uid+'",\n      '
                            + '"cookie_id4_PRE" : "'+json.publishes[1].uid+'",\n      '
                            + '"cookie_id4_BAT" : "'+json.publishes[2].uid+'",\n      '
                            + '"cookie_id4_ALE" : "'+json.publishes[3].uid+'",\n      '
                            + '"cookie_id4_TP" : "'+json.publishes[4].uid+'"';

                            //Mise à jour Prop avec les Uid Feeds du cookie 4

                        var fileXML = 'plugins/mother/mother.prop';
                        var xml = fs.readFileSync(fileXML, 'utf8');
                        replace = '"cookie_id4_MOT" : "';
                        replace += feeds ;
                        replace += '\n    }\n  }\n}';
                        var regexp = new RegExp('"cookie_id4_MOT" : "[^*]+}', 'gm');
                        var xml = xml.replace(regexp, replace);
                        fs.writeFileSync(fileXML, xml, 'utf8');
                  }
              } 
>>>>>>> Stashed changes
       }

       // 3. On pourrait aussi se casser en vocalisant le résutlat
      if (type == 0){
        var tts = 'Le mother Prop a été mis à jour avec les id cookies';
      }else
        if (type == 1){
          var tts = (degree == -100) ? 'je ne sais pas' : ('Il fait '+degree+' degrée');
        }else
          if (type == 2){
            var tts = (volt == -100) ? 'je ne sais pas' : (volt);
          }else
            if (type == 6){
              if (cookies == 1){
                var tts = 'Le Prop a été mis à jour avec les feeds du Cookie un';
              }else if (cookies == 2){
                  var tts = 'Le Prop a été mis à jour avec les feeds du Cookies deux';
                }else if (cookies == 3){
                    var tts = 'Le Prop a été mis à jour avec les feeds du Cookies trois'; 
                  }else if (cookies ==4){
                      var tts = 'Le Prop a été mis à jour avec les feeds du Cookies quatre';
                }
            }


      next({
          "tts" : tts,
          "json" : json
      })

   });

}
/**Request
  *  Comme son nom l'indique on retour le JSON 
  *  des Nodes
  */
  var getFeeds = function(token, key, cookie_node_id, cookie_Temperature_id, cookie_Batery_id, cookie_Motion_id, cookie_Prescense_id, cookie_Alert_id, type_id, callback) {
  
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

