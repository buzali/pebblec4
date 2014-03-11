simply.text({ title: 'Control4 on Pebble', subtitle: "Down Key: Turn lights ON\nLeft Key: Turn lights OFF" });


simply.on('singleClick', function(e) {
  if (e.button === 'up') {
  	ajax({ url: 'http://192.168.1.230:8080/prende_tofi' }, function(data){
  var response = data.match(/<body>(.*?)<P\/>/)[1];
  simply.text({ title: 'Lights ON!', subtitle: "" });
  simply.vibe('short');

});
    
  } else if (e.button === 'down') {
    ajax({ url: 'http://192.168.1.230:8080/apaga_tofi' }, function(data){
  var response = data.match(/<body>(.*?)<P\/>/)[1];
  simply.text({ title: 'Lights OFF!', subtitle: "" });
    simply.vibe('short');

  })
  
};
});