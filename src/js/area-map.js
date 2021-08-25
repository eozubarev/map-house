export default class AreaMap {
    constructor(coordinates, myMap, polygonColor) {
        this.coordinates = coordinates;
        this.myMap = myMap;
        this.polygonColor = polygonColor;
        this.geos = []
        this.prepareMap();
    }

    hide() {
        this.geos.forEach(geoObject => {
            geoObject.options.set("visible", false)

        });
        
        console.log('Hide')
    }

    show() {
        this.geos.forEach(geoObject => {
            geoObject.options.set("visible", true)
        });
        console.log('Show')
    }

    prepareMap() {
        for (let index = 0; index < this.coordinates.length; index++) {
            var myPlacemarkWithContent_1 = new ymaps.Placemark(
                this.coordinates[index],
                {
                    iconCaption: index,
                    // Текст при наведении на метку
                    hintContent: "Дом Марины и Жени",
                    //Текст при нажатии на метку
                    balloonContent: this.coordinates[index][0] + "<br>" + this.coordinates[index][1],
                },
                {
                    preset: "islands#greenDotIconWithCaption",
                    iconColor: this.polygonColor
                }
            );

            this.myMap.geoObjects.add(myPlacemarkWithContent_1);
            this.geos.push(myPlacemarkWithContent_1);
        }

        // Создаем многоугольник, используя вспомогательный класс Polygon.
        this.polygon = new ymaps.Polygon(
            [
                // Указываем координаты вершин многоугольника.
                // Координаты вершин внешнего контура.
                this.coordinates,
            ],
            {
                // Описываем свойства геообъекта.
                // Содержимое балуна.
                hintContent: "Многоугольник",
            },
            {
                // Задаем опции геообъекта.
                // Цвет заливки.
                fillColor: this.polygonColor,
                strokeColor: "#FFFFFF",
                // Ширина обводки.
                strokeWidth: 0.5,
            }
        );

        this.myMap.geoObjects.add(this.polygon);
        this.geos.push(this.polygon);
        console.log("Длина пути: " + this.polygon.geometry.getBounds());
    }
}
