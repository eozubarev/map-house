import './src/main.scss'

import YandexMap from './src/js/yandex-map.js';

document.addEventListener( 'DOMContentLoaded', event => {

    if (document.getElementById('yamap')) {
        new YandexMap;
    }

});

