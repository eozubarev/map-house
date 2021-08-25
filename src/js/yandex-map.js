import AreaMap from "./area-map";
import Switch from "./switch";

export default class YandexMap {
    constructor() {
        this.init();
    }

    init() {
        ymaps.ready(function () {
            console.log("READYYYY");
            var myMap = new ymaps.Map(
                "yamap",
                {
                    center: [57.179300422, 36.541094922],
                    zoom: 17,
                    type: "yandex#hybrid",
                },
                {
                    searchControlProvider: "yandex#search",
                }
            );
            let coordinates1 = [
                [57.179300422, 36.541094922],
                [57.179363806, 36.541661756],
                [57.178966376, 36.541806659],
                [57.178355721, 36.542029958],
                [57.17829459, 36.541462542],
                [57.179300422, 36.541094922],
            ];

            let coordinates2 = [
                [57,1790, 36,5418],
                [57,1790, 36,5424],
                [57,1782, 36,5428],
                [57,1781, 36,5421],
                [57,1790, 36,5418],
            ];

            let coordinates3 = [
                [57.179397279, 36.542292888],
                [57.1794529, 36.542895716],
                [57.178272897, 36.543363467],
                [57.17820305, 36.542765376],
                [57.179397279, 36.542292888],
            ];

            let first = new AreaMap(coordinates1, myMap, "#00FF0088");
            let firstSwitch = new Switch("Дом Марины и Жени", function(isOn) {
                if (isOn) {
                    first.show()
                } else {
                    first.hide()
                }
            })

            let sec = new AreaMap(coordinates2, myMap, "#88EE2240");
            new Switch("Дом Руслана и Ольги", function(isOn) {
                if (isOn) {
                    sec.show()
                } else {
                    sec.hide()
                }
            })


            let third = new AreaMap(coordinates3, myMap, "#FF00FF40");
            new Switch("Дом 3", function(isOn) {
                if (isOn) {
                    third.show()
                } else {
                    third.hide()
                }
            })
        });
    }
}
