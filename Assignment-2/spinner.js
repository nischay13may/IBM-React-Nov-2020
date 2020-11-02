var spinner = {};
(function mySpinner(){
    var count=0;
    spinner.up= function(){
        return ++count;
    }

    spinner.down= function(){
        return --count;
    }
})();
