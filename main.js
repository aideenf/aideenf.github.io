$( '.friend-drawer--onhover' ).on( 'click',  function() {
  
  $( '.chat-bubble' ).hide('slow').show('slow');
  
});

if ('serviceWorker' in navigator) 
{
   //window.alert("Your browser does support this messaging application which uses service workers");
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

else 
{
  console.log('ServiceWorker not in navigator');
  window.alert("Your browser does no support this messaging application");
}
