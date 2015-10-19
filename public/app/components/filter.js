app.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input ? input.slice(start) : '';
    }
});
app.filter('capitalize', function() {
    return function(input, scope) {
        if (input != null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase();
        }
    }
});
app.filter('startOffset', function (){
      return function (input, start){
        start = Math.abs(parseInt(start,10));
        if(input){
          return input.slice(start);
        }
      };
    });
