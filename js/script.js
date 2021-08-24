
ymaps.ready(function () {
    var coordinates = [
        [57.179300422, 36.541094922],
        [57.179363806, 36.541661756],
        [57.178966376, 36.541806659],
        [57.178355721, 36.542029958],
        [57.178294590, 36.541462542],
        [57.179300422, 36.541094922]
    ]

        // yamap - ID блока, в котором инициализируется карта
	var myMap = new ymaps.Map('yamap', {
			//Берём центр Москвы
			center: coordinates[0], 
			zoom: 17,
            type: 'yandex#hybrid'
		}, {
			searchControlProvider: 'yandex#search',
		});

		// Создаём макет содержимого.
		var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold; border-color: 6px;">$[properties.iconContent]</div>'
		);

 
        for (let index = 0; index < coordinates.length; index++) {
            var myPlacemarkWithContent_1 = new ymaps.Placemark(coordinates[index], {
                'iconCaption': 'Точка №' + index,
				// Текст при наведении на метку
				hintContent: 'Дом Марины и Жени', 
				//Текст при нажатии на метку
				balloonContent: coordinates[index][0] + '<br>' + coordinates[index][1]
            }, {
                preset: 'islands#greenDotIconWithCaption'
            });

		    myMap.geoObjects.add(myPlacemarkWithContent_1);

            // if (index > 0) {
            //     var distance = q.rulerDistance(new ymaps.GeoPoint(coordinates[index-1][0], coordinates[index-1][1]), 
            //     new ymaps.GeoPoint(coordinates[index][0], coordinates[index][1]))
            //     myMap.geoObjects.add(new ymaps.Placemark(coordinates[index], {'iconCaption': distance}, {preset: 'islands#greenDotIconWithCaption'}));
            // }
        }

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        coordinates
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0088',
        strokeColor: '#FFFFFF',
        // Ширина обводки.
        strokeWidth: 0.5,
    });

    myMap.geoObjects.add(myPolygon);

    let multiRoute = new ymap.multiRouter.MultiRoute({
            referencePoints: coordinates
        });// Подписка на событие готовности маршрута.
        multiRoute.model.events.add('requestsuccess', function() {
            // Получение ссылки на активный маршрут.
            var activeRoute = multiRoute.getActiveRoute();
            // Получение коллекции путей активного маршрута.
            var activeRoutePaths = activeRoute.getPaths();
            // Проход по коллекции путей.
            activeRoutePaths.each(function(path) {
                console.log("Длина пути: " + path.properties.get("distance").text);
                console.log("Время прохождения пути: " + path.properties.get("duration").text);
            });
        });
        multiRoute.editor.stop();
        myMap.geoObjects.add(multiRoute);

});