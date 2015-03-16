var ngAFIP = angular.module('ngAFIP', []);
ngAFIP.service('AFIP', function($http){
	var defaults = {
		api : 'https://soa.afip.gob.ar/sr-padron/v2/persona/'
	}
	this.findByCuit = function(cuit, success, error){
		var url = defaults.api;
		var parm = cuit;
		url = url + parm;
		$http.get(url).success(success).error(error);
	}
});
ngAFIP.factory('AFIPfc', function(AFIP){
	var f = {};
	return f;
});