simply.on('singleClick', function(e) {
  if (e.button === 'up') {
  	ajax({ url: 'http://192.168.1.230:8080/prende_tofi' }, function(data){
  var headline = data.match(/<body>(.*?)<P\/>/)[1];
  simply.title(headline);
});
    
  } else if (e.button === 'down') {
    ajax({ url: 'http://192.168.1.230:8080/apaga_tofi' }, function(data){
  var headline = data.match(/<body>(.*?)<P\/>/)[1];
  simply.title(headline);
  })
  
};
});