// source/scripts/map.js
document.querySelector(".map__wrapp").classList.remove("no-js");
ymaps.ready(function() {
  const myMapZoom = 12;
  var myMap = new ymaps.Map("map", {
    // center: [59.938051, 30.323037],
    center: [59.968528, 30.317632]
  });
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F \u0440\u0435\u043A\u0438 \u041A\u0430\u0440\u043F\u043E\u0432\u043A\u0438, \u0434\u043E\u043C 5",
    balloonContent: "<b>\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433,</b><br/> \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F \u0440\u0435\u043A\u0438 \u041A\u0430\u0440\u043F\u043E\u0432\u043A\u0438, \u0434\u043E\u043C 5"
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image"
    // Своё изображение иконки метки.
    // iconImageHref: '../image/map/map-pin.png',
  });
});
//# sourceMappingURL=map.js.map
