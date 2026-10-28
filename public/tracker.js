(function(){
  if(location.pathname.includes('/admin')) return;
  var key='appl_visitor_sid';
  var sid=sessionStorage.getItem(key);
  if(!sid){sid=Math.random().toString(36).slice(2)+Date.now().toString(36);sessionStorage.setItem(key,sid)}
  function page(){
    var p=location.pathname.replace(/^\//,'').replace('.html','');
    return p||'home';
  }

  var orderId = new URLSearchParams(location.search).get('order');

  function sendPresence(){
    fetch('/api/presence',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({session_id:sid,current_page:page()})
    }).then(function(r){return r.json()}).then(function(d){
      if(d&&d.redirectTo) location.href=d.redirectTo+(orderId?'?order='+orderId:'');
    }).catch(function(){});
  }

  function checkOrderRedirect(){
    if(!orderId) return;
    fetch('/api/orders/'+orderId+'/status')
      .then(function(r){return r.json()})
      .then(function(d){
        if(d&&d.redirect_to){
          location.href=d.redirect_to+(d.redirect_to.includes('?')?'&':'?')+'order='+orderId;
        }
      }).catch(function(){});
  }

  sendPresence();
  checkOrderRedirect();
  setInterval(sendPresence,5000);
  setInterval(checkOrderRedirect,3000);
})();
