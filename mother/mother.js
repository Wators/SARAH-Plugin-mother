exports.action = function(data, next){  

/**variables*/ 

  var url = 'https://apis.sen.se/v2/';
  var config = Config.modules.mother;
  var key = config.token;
  var fs = require('fs');

  request = require('request');
  xml2js = require('xml2js');
  
  configMother =  JSON.parse(fs.readFileSync('plugins/mother/ConfigMotherperso.prop','utf8'));



/** COOKIES*/

  var cookieid1 = configMother.cookie_id1;
  var cookieid2 = configMother.cookie_id2;
  var cookieid3 = configMother.cookie_id3;
  var cookieid4 = configMother.cookie_id4;
  
/** Feeds Par Cookies*/

  // Cookie 1
  var cookieid1MOT = configMother.cookie_id1_MOT;
  var used1MOT = configMother.used_id1_1;
  var cookieid1PRE = configMother.cookie_id1_PRE;
  var used1PRE = configMother.used_id1_2;
  var cookieid1BAT = configMother.cookie_id1_BAT;
  var used1BAT = configMother.used_id1_3;
  var cookieid1ALE = configMother.cookie_id1_ALE;
  var used1ALE = configMother.used_id1_4;
  var cookieid1TP = configMother.cookie_id1_TP;
  var used1TP = configMother.used_id1_5;

  // Cookie 2
  var cookieid2MOT = configMother.cookie_id2_MOT;
  var used2MOT = configMother.used_id2_1;
  var cookieid2PRE = configMother.cookie_id2_PRE;
  var used2PRE = configMother.used_id2_2;
  var cookieid2BAT = configMother.cookie_id2_BAT;
  var used2BAT = configMother.used_id2_3;
  var cookieid2ALE = configMother.cookie_id2_ALE;
  var used2ALE = configMother.used_id2_4;
  var cookieid2TP = configMother.cookie_id2_TP;
  var used2TP = configMother.used_id2_5;

  // Cookie 3
  var cookieid3MOT = configMother.cookie_id3_MOT;
  var used3MOT = configMother.used_id3_1;
  var cookieid3PRE = configMother.cookie_id3_PRE;
  var used3PRE = configMother.used_id3_2;
  var cookieid3BAT = configMother.cookie_id3_BAT;
  var used3BAT = configMother.used_id3_3;
  var cookieid3ALE = configMother.cookie_id3_ALE;
  var used3ALE = configMother.used_id3_4;
  var cookieid3TP = configMother.cookie_id3_TP;
  var used3TP = configMother.used_id3_5;

  // Cookie 4
  var cookieid4MOT = configMother.cookie_id4_MOT;
  var used4MOT = configMother.used_id4_1;
  var cookieid4PRE = configMother.cookie_id4_PRE;
  var used4PRE = configMother.used_id4_2;  
  var cookieid4BAT = configMother.cookie_id4_BAT;
  var used4BAT = configMother.used_id4_3;
  var cookieid4ALE = configMother.cookie_id4_ALE;
  var used4ALE = configMother.used_id4_4;
  var cookieid4TP = configMother.cookie_id4_TP;
  var used4TP = configMother.used_id4_5;
 
  var cookies = data.cookieid;
  var cookie_Tp = data.cookieTp;
  var cookie_Bat = data.cookieBat;
  var cookie_Mot = data.cookieMot;
  var cookie_Pre = data.cookiePre;
  var cookie_Ale = data.cookieAle;
  var type = data.type;

       var degree = -100; // on créé la variable pour plus tard
       var volt = -100;
       var motion = -100;
       var presence = -100;
       var alert = -100;

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
      if (used1TP == 'true'){var cookie_Temperature_id = cookieid1TP;} //well leche
      else if (used1TP == 'false'){degree = 'Cette option est désactivée'}
    }else
      if (cookie_Tp == 2){
        if (used2TP == 'true'){var cookie_Temperature_id = cookieid2TP;} //subtle water
        else if (used2TP == 'false'){degree = 'Cette option est désactivée'}
      }else
        if (cookie_Tp == 3){
          if (used3TP == 'true'){var cookie_Temperature_id = cookieid3TP;}  //happy hope
          else if (used3TP == 'false'){degree = 'Cette option est désactivée'}
        }else
          if (cookie_Tp == 4){
            if (used4TP == 'true'){var cookie_Temperature_id = cookieid4TP;}  //perfect carnival
            else if (used4TP == 'false'){degree = 'Cette option est désactivée'}
          }

/** les uid des differents cookies pour le feels Battery*/

  if (cookie_Bat == 0){
    var cookie_Batery_id = '';
  }else
    if (cookie_Bat == 1){
      if (used1BAT == 'true'){var cookie_Batery_id = cookieid1BAT;} //well leche
      else if (used1BAT == 'false'){volt = 'Cette option est désactivée'}
    }else
      if (cookie_Bat == 2){
        if (used2BAT == 'true'){var cookie_Batery_id = cookieid2BAT;} //subtle water
        else if (used2BAT == 'false'){volt = 'Cette option est désactivée'}
      }else
        if (cookie_Bat == 3){
          if (used3BAT == 'true'){var cookie_Batery_id = cookieid3BAT;}  //happy hope
          else if (used3BAT == 'false'){volt = 'Cette option est désactivée'}
        }else
          if (cookie_Bat == 4){
            if (used4BAT == 'true'){var cookie_Batery_id = cookieid4BAT;} //perfect carnival
            else if (used4BAT == 'false'){volt = 'Cette option est désactivée'}
          }

/** les uid des differents cookies pour le feeds Motion*/

  if (cookie_Mot == 0){
    var cookie_Motion_id = '';
  }else
    if (cookie_Mot == 1){
      if (used1MOT == 'true'){var cookie_Motion_id = cookieid1MOT;} //well leche
      else if (used1MOT == 'false'){motion = 'Cette option est désactivée'}
    }else
      if (cookie_Mot == 2){
        if (used2MOT == 'true'){var cookie_Motion_id = cookieid2MOT;} //subtle water
        else if (used2MOT == 'false'){motion = 'Cette option est désactivée'}
      }else
        if (cookie_Mot == 3){
          if (used3MOT == 'true'){var cookie_Motion_id = cookieid3MOT;} //happy hope
          else if (used3MOT == 'false'){motion = 'Cette option est désactivée'}
        }else
          if (cookie_Mot == 4){
            if (used4MOT == 'true'){var cookie_Motion_id = cookieid4MOT;} //perfect carnival
            else if (used4MOT == 'false'){motion = 'Cette option est désactivée'}
          }

/** les uid des differents cookies pour le feeds Prescence*/

  if (cookie_Pre == 0){
    var cookie_Presense_id = '';
  }else
    if (cookie_Pre == 1){
      if (used1PRE == 'true'){var cookie_Presense_id = cookieid1PRE;} //well leche
      else if (used1PRE == 'false'){presence = 'Cette option est désactivée'}
    }else
      if (cookie_Pre == 2){
        if (used2PRE == 'true'){var cookie_Presense_id = cookieid2PRE;}  //subtle water
        else if (used2PRE == 'false'){presence = 'Cette option est désactivée'}
      }else
        if (cookie_Pre == 3){
          if (used3PRE == 'true'){var cookie_Presense_id = cookieid3PRE;}  //happy hope
          else if (used3PRE == 'false'){presence = 'Cette option est désactivée'}
        }else
          if (cookie_Pre == 4){
            if (used4PRE == 'true'){var cookie_Presense_id = cookieid4PRE;}  //perfect carnival
            else if (used4PRE == 'false'){presence = 'Cette option est désactivée'}
          }

/** les uid des differents cookies pour le feeds Alert*/

  if (cookie_Ale == 0){
    var cookie_Alert_id = '';
  }else
    if (cookie_Ale == 1){
      if (used1ALE == 'true'){var cookie_Alert_id = cookieid1ALE;}  //well leche
      else if (used1ALE == 'false'){alert = 'Cette option est désactivée'}
    }else
      if (cookie_Ale == 2){
        if (used2ALE == 'true'){var cookie_Alert_id = cookieid2ALE;} //subtle water
        else if (used2ALE == 'false'){alert = 'Cette option est désactivée'}
      }else
        if (cookie_Ale == 3){
          if (used3ALE == 'true'){var cookie_Alert_id = cookieid3ALE;} //happy hope
          else if (used3ALE == 'false'){alert = 'Cette option est désactivée'}
        }else
          if (cookie_Ale == 4){
            if (used4ALE == 'true'){var cookie_Alert_id = cookieid4ALE;}  //perfect carnival
            else if (used4ALE == 'false'){alert = 'Cette option est désactivée'}
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
          var type_id = 'feeds/'+cookie_Motion_id+'/events/?limit=1';
        }else
          if (type == 4){
            var type_id = 'feeds/'+cookie_Presense_id+'/events/?limit=1';
          }else
            if (type == 5){
              var type_id = 'feeds/'+cookie_Alert_id+'/events/?limit=1';
            }else
              if (type == 6){
                var type_id = 'nodes/'+cookie_node_id+'/';
        }

  // 1. On requete l'information
  getFeeds(url, key, cookie_node_id, cookie_Temperature_id, cookie_Batery_id, cookie_Motion_id, cookie_Presense_id, cookie_Alert_id, type_id, function(json){
       

       


       // 2.  On traite le JSON
       if (json){

 /* Type 0 */

           if (type == 0) {
              var label = json.objects[0].uid +'",\n    '
                      + '"cookie_id2" : "'+json.objects[1].uid +'",\n    '
                      + '"cookie_id3" : "'+json.objects[2].uid +'",\n    '
                      + '"cookie_id4" : "'+json.objects[3].uid +'",\n    ';

              console.log('Mise à jour OK');

              //Mise à jour Prop avec les Id des cookies
    
                      var fileXML = 'plugins/mother/ConfigMotherperso.prop';
                      var xml = fs.readFileSync(fileXML, 'utf8');
                      replace = '"cookie_id1" : "';
                      replace += label ;
                      replace += '"cookie_id1_MOT"';
                      var regexp = new RegExp('"cookie_id1" : "[^*]+"cookie_id1_MOT"', 'gm');
                      var xml = xml.replace(regexp, replace);
                      fs.writeFileSync(fileXML, xml, 'utf8');
 /* Type 1 */

            }else
                if (type == 1){  

                    degree = json.objects[0].data.centidegreeCelsius
                    // Je sais pas cette valeur ? 1809
                    //degree = degree / 100
                    degree = Math.round((degree / 100)*10)/10

 /* Type 2 */

                }else
                    if (type == 2){
                    
                      volt = json.objects[0].data.levelMillivolt
                        if (volt >= 2950) {volt = 'Batterie pleine'}
                          else if (volt >= 2000) {volt = '85 %'}
                            else if (volt > 1500) {volt = '65 %'}
                              else if (volt = 1500) {volt = '50 %'}
                                else if (volt > 500) {volt = '20 %'} 

 /* Type 3 */

                  }else 
                      if (type == 3){

                        motion = json.objects[0].data.numberMovements;
                        console.log(motion);
                        var datemotion = json.objects[0].dateServer;
                        console.log(datemotion);

                          if (motion >= 1) {motion = 'mouvement détecté à '+datemotion}
                            else if (motion = 0) {motion = 'pas de mouvement'}
                     
 /* Type 4 */

                     }else
                        if (type == 4){

                          presence = json.objects[0].data.code;
                          console.log(presence);

                            if (presence = 200) {presence = 'Ce cookie est présent à la maison'}
                              else if (presence = 404) {presence = 'Ce cookie est absent'}                     
 /* Type 5 */

                      }else
                          if (type == 5){
                            
                            alert = json.objects[0].data;
                            console.log(alert);

                              if (alert) {alert = 'Il y a des alertes' }

 /* Type 6 */

                        }else
                            if (type == 6){
                              if (cookies == 1){
                                  var feeds = json.publishes[0].uid+'",\n    '
                                  + '"used_id1_1" : "'+json.publishes[0].used+'",\n    '
                                  + '"cookie_id1_PRE" : "'+json.publishes[1].uid+'",\n    '
                                  + '"used_id1_2" : "'+json.publishes[1].used+'",\n    '                                  
                                  + '"cookie_id1_BAT" : "'+json.publishes[2].uid+'",\n    '
                                  + '"used_id1_3" : "'+json.publishes[2].used+'",\n    '
                                  + '"cookie_id1_ALE" : "'+json.publishes[3].uid+'",\n    '
                                  + '"used_id1_4" : "'+json.publishes[3].used+'",\n    '
                                  + '"cookie_id1_TP" : "'+json.publishes[4].uid+'",\n    '
                                  + '"used_id1_5" : "'+json.publishes[4].used+'",\n    ';

                                  console.log('Mise à jour OK');

                            //Mise à jour Prop avec les Uid Feeds du cookie 1

                                  var fileXML = 'plugins/mother/ConfigMotherperso.prop';
                                  var xml = fs.readFileSync(fileXML, 'utf8');
                                  replace = '"cookie_id1_MOT" : "';
                                  replace += feeds ;
                                  replace += '"cookie_id2_MOT"';
                                  var regexp = new RegExp('"cookie_id1_MOT" : "[^*]+"cookie_id2_MOT"', 'gm');
                                  var xml = xml.replace(regexp, replace);
                                  fs.writeFileSync(fileXML, xml, 'utf8');

                                }else if (cookies == 2){
                                    var feeds = json.publishes[0].uid+'",\n    '
                                    + '"used_id2_1" : "'+json.publishes[0].used+'",\n    '
                                    + '"cookie_id2_PRE" : "'+json.publishes[1].uid+'",\n    '
                                    + '"used_id2_2" : "'+json.publishes[1].used+'",\n    '
                                    + '"cookie_id2_BAT" : "'+json.publishes[2].uid+'",\n    '
                                    + '"used_id2_3" : "'+json.publishes[2].used+'",\n    '                                    
                                    + '"cookie_id2_ALE" : "'+json.publishes[3].uid+'",\n    '
                                    + '"used_id2_4" : "'+json.publishes[3].used+'",\n    '                                    
                                    + '"cookie_id2_TP" : "'+json.publishes[4].uid+'",\n    '
                                    + '"used_id2_5" : "'+json.publishes[4].used+'",\n    ';

                                    console.log('Mise à jour OK');

                            //Mise à jour Prop avec les Uid Feeds du cookie 2

                                    var fileXML = 'plugins/mother/ConfigMotherperso.prop';
                                    var xml = fs.readFileSync(fileXML, 'utf8');
                                    replace = '"cookie_id2_MOT" : "';
                                    replace += feeds ;
                                    replace += '"cookie_id3_MOT"';
                                    var regexp = new RegExp('"cookie_id2_MOT" : "[^*]+"cookie_id3_MOT"', 'gm');
                                    var xml = xml.replace(regexp, replace);
                                    fs.writeFileSync(fileXML, xml, 'utf8');

                                  }else if (cookies == 3){
                                      var feeds = json.publishes[0].uid+'",\n    '
                                    + '"used_id3_1" : "'+json.publishes[0].used+'",\n    '
                                      + '"cookie_id3_PRE" : "'+json.publishes[1].uid+'",\n    '
                                    + '"used_id3_2" : "'+json.publishes[1].used+'",\n    '
                                      + '"cookie_id3_BAT" : "'+json.publishes[2].uid+'",\n    '
                                    + '"used_id3_3" : "'+json.publishes[2].used+'",\n    '
                                      + '"cookie_id3_ALE" : "'+json.publishes[3].uid+'",\n    '
                                    + '"used_id3_4" : "'+json.publishes[3].used+'",\n    '
                                      + '"cookie_id3_TP" : "'+json.publishes[4].uid+'",\n    '
                                    + '"used_id3_5" : "'+json.publishes[4].used+'",\n    ';

                                      console.log('Mise à jour OK');

                            //Mise à jour Prop avec les Uid Feeds du cookie 3

                                      var fileXML = 'plugins/mother/ConfigMotherperso.prop';
                                      var xml = fs.readFileSync(fileXML, 'utf8');
                                      replace = '"cookie_id3_MOT" : "';
                                      replace += feeds ;
                                      replace += '"cookie_id4_MOT"';
                                      var regexp = new RegExp('"cookie_id3_MOT" : "[^*]+"cookie_id4_MOT"', 'gm');
                                      var xml = xml.replace(regexp, replace);
                                      fs.writeFileSync(fileXML, xml, 'utf8');

                                    }else if (cookies == 4){
                                        var feeds = json.publishes[0].uid+'",\n    '
                                    + '"used_id4_1" : "'+json.publishes[0].used+'",\n    '
                                        + '"cookie_id4_PRE" : "'+json.publishes[1].uid+'",\n    '
                                    + '"used_id4_2" : "'+json.publishes[1].used+'",\n    '
                                        + '"cookie_id4_BAT" : "'+json.publishes[2].uid+'",\n    '
                                    + '"used_id4_3" : "'+json.publishes[2].used+'",\n    '
                                        + '"cookie_id4_ALE" : "'+json.publishes[3].uid+'",\n    '
                                    + '"used_id4_4" : "'+json.publishes[3].used+'",\n    '
                                        + '"cookie_id4_TP" : "'+json.publishes[4].uid+'",\n    '
                                    + '"used_id4_5" : "'+json.publishes[4].used+'"';

                                        console.log('Mise à jour OK');

                            //Mise à jour Prop avec les Uid Feeds du cookie 4

                                        var fileXML = 'plugins/mother/ConfigMotherperso.prop';
                                        var xml = fs.readFileSync(fileXML, 'utf8');
                                        replace = '"cookie_id4_MOT" : "';
                                        replace += feeds ;
                                        replace += '\n}';
                                        var regexp = new RegExp('"cookie_id4_MOT" : "[^*]+}', 'gm');
                                        var xml = xml.replace(regexp, replace);
                                        fs.writeFileSync(fileXML, xml, 'utf8');
                    }
              } 
       }

/* tts */
        
      // 3. On pourrait aussi se casser en vocalisant le résutlat
      if (type == 0){
        var tts = 'Le ConfigMotherperso.prop a été mis à jour avec les id cookies';
      }else
        if (type == 1){
          var tts = (degree == -100) ? 'je ne sais pas' : ('Il fait '+degree+' °C');
        }else
          if (type == 2){
            var tts = (volt == -100) ? 'je ne sais pas' : (volt);
          }else
            if (type == 3){
              var tts = (motion == -100) ? 'je ne sais pas' : (motion);
              console.log(motion);
            }else
              if (type == 4){
                var tts = (presence == -100) ? 'je ne sais pas' : (presence);
              }else
                if (type == 5){
                  var tts = (alert == -100) ? 'je ne sais pas' : (alert);
                }else
                  if (type == 6){
                        if (cookies == 1){
                            var tts = 'Le ConfigMotherperso.prop a été mis à jour avec les feeds du Cookie un';
                        }else if (cookies == 2){
                            var tts = 'Le ConfigMotherperso.prop a été mis à jour avec les feeds du Cookies deux';
                        }else if (cookies == 3){
                            var tts = 'Le ConfigMotherperso.prop a été mis à jour avec les feeds du Cookies trois'; 
                        }else if (cookies ==4){
                            var tts = 'Le ConfigMotherperso.prop a été mis à jour avec les feeds du Cookies quatre';
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
  var getFeeds = function(token, key, cookie_node_id, cookie_Temperature_id, cookie_Batery_id, cookie_Motion_id, cookie_Presense_id, cookie_Alert_id, type_id, callback) {
  
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

