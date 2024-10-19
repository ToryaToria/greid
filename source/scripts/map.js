document.querySelector('.map__wrapp').classList.remove('no-js');

ymaps.ready(function () {

  // массив размеров маркера
    // const sizePlacemark = [38, 50];
    

      // массив масштабов
    const myMapZoom = 12;

    var myMap = new ymaps.Map('map', {
            // center: [59.938051, 30.323037],
            center: [59.968528, 30.317632],
        });

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
            balloonContent: '<b>Санкт-Петербург,</b><br/>' + ' набережная реки Карповки, дом 5'
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',

            // Своё изображение иконки метки.
            // iconImageHref: '../image/map/map-pin.png',
        });

    // myMap.geoObjects
    //     .add(myPlacemark);

    //     let check = true;
    //     myMap.events.add('boundschange', function () {
    //         if (window.innerWidth <= 768 && check) {
    //             myPlacemark.options.set('iconImageSize', sizePlacemark[0]);
    //             myMap.setZoom(myMapZoom[0], {duration: 300});
    //             return check = false;
    //         } else if (window.innerWidth > 768 && !check) {
    //             myPlacemark.options.set('iconImageSize', sizePlacemark[1]);
    //             myMap.setZoom(myMapZoom[1], { duration: 300 });
    //             return check = true;
    //         } else if (window.innerWidth > 1440) {
    //             myMap.setZoom(myMapZoom[2], { duration: 300 });
    //         }
    //     });
});
