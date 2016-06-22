function callLater(timeout, callback) {
    if(typeof timeout !== 'number'){
      callback = timeout;
      timeout = 3000;
    }
   setTimeout(callback, timeout); 
}




callLater(1000, function(){
          console.log('hello');
     });

callLater(function(){
          console.log('hello again');
     });

