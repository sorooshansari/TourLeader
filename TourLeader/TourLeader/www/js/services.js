/*

  DeepBlue Starter Kit - version 1.1
  Copyright (c) 2015 INMAGIK SRL - www.inmagik.com
  All rights reserved

  written by Mauro Bianchi
  bianchimro@gmail.com  
  
  file: services.js
  description: this file contains all services of the DeepBlue app.

*/


angular.module('TourLeader.services', [])

.factory('Locales', function () {

    var locales = [{
        id: 0,
        name: '39º27N',
        tipo: 'Copas',
        direccion: 'Calle falsa 123, Valencia',
        logo: 'images/logo39.jpg'
    }, {
        id: 1,
        name: '48',
        tipo: 'Copas',
        direccion: 'Calle falsa 123, Valencia',
        logo: 'images/logo48.jpg'
    }, {
        id: 2,
        name: 'ANIMAS',
        tipo: 'Discoteca',
        direccion: 'Calle falsa 123, Valencia',
        logo: 'images/animas.jpg'
    }, {
        id: 3,
        name: 'BAGOAS',
        tipo: 'Copas',
        direccion: 'Calle falsa 123, Valencia',
        logo: 'images/48.jpg'
    }, {
        id: 4,
        name: 'BFORE CLUB',
        tipo: 'Copas',
        direccion: 'Calle falsa 123, Valencia',
        logo: 'images/bfore.jpg'
    }, {
        id: 5,
        name: 'CONDADO CLUB',
        tipo: 'Discoteca',
        direccion: 'Calle Marques de campo 12, Denia',
        logo: 'images/condado.jpg'
    }];

    return {
        all: function () {
            return locales;
        },
        remove: function (local) {
            locales.splice(locales.indexOf(local), 1);
        },
        get: function (id_local) {
            for (var i = 0; i < locales.length; i++) {
                if (locales[i].id === parseInt(id_local)) {
                    return locales[i];
                }
            }
            return null;
        }
    };
})
.factory("places", function () {
    var Place = [{
        cityId: 0,
        CityTitle: "Shiraz",
        CityPlaces: [
            {
                PlaceId: 0,
                PlaceTitle: 'Title0',
                PlaceDescription: 'Description0',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 1,
                PlaceTitle: 'Title1',
                PlaceDescription: 'Description1',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 2,
                PlaceTitle: 'Title2',
                PlaceDescription: 'Description2',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 3,
                PlaceTitle: 'Title3',
                PlaceDescription: 'Description3',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 4,
                PlaceTitle: 'Title4',
                PlaceDescription: 'Description4',
                PlacePic: 'https://placehold.it/300x200'
            }]},
        {
        cityId: 0,
        CityTitle: "Esfehan",
        CityPlaces: [
            {
                PlaceId: 1,
                PlaceTitle: 'Title0',
                PlaceDescription: 'Description0',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 1,
                PlaceTitle: 'Title1',
                PlaceDescription: 'Description1',
                PlacePic: 'https://placehold.it/300x200'
            },
            {
                PlaceId: 2,
                PlaceTitle: 'Title2',
                PlaceDescription: 'Description2',
                PlacePic: 'https://placehold.it/300x200'
            }]
        }];
    return {
        all: function () {
            return Place;
        },
        get_City_Places: function (CityId) {
            for (var i = 0; i < Place.length; i++) {
                if (Place[i].CityId === parseInt(CityId)) {
                    return Place[i].CityPlaces;
                }
            }
            return null;
        },
        get: function (id_Place) {
            for (var i = 0; i < Place.length; i++) {
                if (Place[i].id === parseInt(id_Place)) {
                    return Place[i];
                }
            }
            return null;
        }
    };
})
.factory('SlideShows', function () {
    var SlideShow = [
        {
        id:0,
        Title: 'Title0',
        Description: 'Description0',
        URL: 'https://placehold.it/300x200'
    },
    {
        id: 1,
        Title: 'Title1',
        Description: 'Description1',
        URL: 'https://placehold.it/300x200'
    },
    {
        id: 2,
        Title: 'Title2',
        Description: 'Description2',
        URL: 'https://placehold.it/300x200'
    },
    {
        id: 3,
        Title: 'Title3',
        Description: 'Description3',
        URL: 'https://placehold.it/300x200'
    }];

    return {
        all: function () {
            return SlideShow;
        },
        get: function (id_local) {
            for (var i = 0; i < locales.length; i++) {
                if (locales[i].id === parseInt(id_local)) {
                    return locales[i];
                }
            }
            return null;
        }
    };
});
