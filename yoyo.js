

var doPascal = function(n){
  
  var max = (2*n + 1)*2;
  var maha = '';

  for(var i=1; i<=n ; i++){
  	var line = '';
  	var mid  = max/2 + 1/2;
  	var count = 0;
  	for(var j=1; j<=max; j++){
  	  if(j%2==0 && count<n){
  	    line += '1';
  	    count +=1; 
  	  }
  	  else{ line+= ' '; }
  	}

  	count = 0;

  	maha += line + '\n';
  }	
  console.log(maha);
};


window.doPascal = doPascal;