angular.module('MagicMirror')
.factory('weatherService', ['$http', function($http) {
    'use strict';
    var weather = {};
    var promise;

    // Init
    console.log('Weather service started');
    if(!promise) {
        requestWeather().then(function() {
            //
        });
    }

    function requestWeather() {
        promise = $http({
            method: 'GET',
            dataType: 'json',
            params: {'stations': '1', 'time': '3h', 'anytime': '0'},
            url: 'http://apis.is/weather/observations/is'
        }).then(function(response) {
            // Process the data
            weather = response.data.results[0];
            weather.icon = findWeatherIcon(weather.W);
            return weather;
        }, function(err) {
            console.log(err);
        });

        return promise;
    }

    function findWeatherIcon(description) {
        // http://www.vedur.is/vedur/frodleikur/greinar/nr/748
        var url = 'img/weatherIcons/';
        if(description === 'Heiðskírt') {
            url += 'heidskirt.gif';
        }
        else if(description === 'Léttskýjað') {
            url += 'lettskyjad.gif';
        }
        else if(description === 'Skýjað') {
            url += 'skyjad.gif';
        }
        else if(description === 'Alskýjað') {
            url += 'alskyjad.gif';
        }
        else if(description === 'Lítils háttar rigning') {
            url += 'litilsHattarRigning.gif';
        }
        else if(description === 'Rigning') {
            url += 'rigning.gif';
        }
        else if(description === 'Lítils háttar slydda') {
            url += 'litilsHattarSlydda.gif';
        }
        else if(description === 'Slydda') {
            url += 'slydda.gif';
        }
        else if(description === 'Lítils háttar snjókoma') {
            url += 'litilsHattarSnjokoma.gif';
        }
        else if(description === 'Snjókoma') {
            url += 'snjokoma.gif';
        }
        else if(description === 'Skúrir') {
            url += 'skurir.gif';
        }
        else if(description === 'Slydduél') {
            url += 'slydduel.gif';
        }
        else if(description === 'Snjóél') {
            url += 'snjoel.gif';
        }
        else if(description === 'Skýstrókar') {
            url += 'skystrokar.gif';
        }
        else if(description === 'Moldrok') {
            url += 'moldrok.gif';
        }
        else if(description === 'Skafrenningur') {
            url += 'skafrenningur.gif';
        }
        else if(description === 'Þoka') {
            url += 'þoka.gif';
        }
        else if(description === 'Lítils háttar súld') {
            url += 'litilsHattarSuld.gif';
        }
        else if(description === 'Súld') {
            url += 'suld.gif';
        }
        else if(description === 'Frostrigning') {
            url += 'frostrigning.gif';
        }
        else if(description === 'Hagl') {
            url += 'hagl.gif';
        }
        else if(description === 'Lítils háttar þrumuveður') {
            url += 'litilsHattarThrumuvedur.gif';
        }

        return url;
    }

    return {
        getWeather: function() {
            return promise;
        }
    };
}]);
