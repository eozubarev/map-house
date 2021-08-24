import './src/main.scss'

import Switch from './src/js/switch.js';
import YandexMap from './src/js/yandex-map.js';

document.addEventListener( 'DOMContentLoaded', event => {

    if (document.getElementById('yamap')) {
        new YandexMap;
    }

    if (document.getElementById('switch')) {
        new Switch;
    }
});

