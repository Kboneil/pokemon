angular.module('routeApp')
.controller('MainController', MainController);

function MainController ($http) {
  var main=this;

  main.catch = function () {
    console.log('inside catch');
      main.pokemon = 'hide';
      main.catch = 'catch';
  };
  main.reset = function () {
    main.pokemon = '';
    main.catch = 'pokeballCatch';
  };
}
