

//     var map; // Global declaration of the map
//     var iw = new google.maps.InfoWindow(); // Global declaration of the infowindow
//     var lat_longs = new Array();
//     var markers = new Array();
//     var drawingManager;

//     function initialize() {
//       var myLatlng = new google.maps.LatLng(40.9403762, -74.1318096);
//       var myOptions = {
//         zoom: 13,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
//       map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
//       drawingManager = new google.maps.drawing.DrawingManager({
//         drawingMode: google.maps.drawing.OverlayType.POLYGON,
//         drawingControl: true,
//         drawingControlOptions: {
//           position: google.maps.ControlPosition.TOP_CENTER,
//           drawingModes: [google.maps.drawing.OverlayType.POLYGON]
//         },
//         polygonOptions: {
//           editable: true
//         }
//       });
//       drawingManager.setMap(map);

//       google.maps.event.addListener(drawingManager, "overlaycomplete", function (event) {
//         var newShape = event.overlay;
//         newShape.type = event.type;
//       });

//       google.maps.event.addListener(drawingManager, "overlaycomplete", function (event) {
//         overlayClickListener(event.overlay);
//         $('#vertices').val(event.overlay.getPath().getArray());
//       });
//     }

//     function overlayClickListener(overlay) {
//       google.maps.event.addListener(overlay, "mouseup", function (event) {
//         $('#vertices').val(overlay.getPath().getArray());
//       });
//     }
//     google.maps.event.addDomListener(window, 'load', initialize);

//     $(function () {
//       $('#save').click(function () {
//         //iterate polygon vertices?
//       });
//     });


//     // area
       
// function GetArea(polygon) {
//   const length = polygon.length;

//   let sum = 0;

//   for (let i = 0; i < length; i += 2) {
//     sum +=
//       polygon[i] * polygon[(i + 3) % length] -
//       polygon[i + 1] * polygon[(i + 2) % length];
//   }

//   console.log(Math.abs(sum) * 0.5);
// }

// function latlontocart(latlon) {
//   let latAnchor = latlon[0][0];
//   let lonAnchor = latlon[0][1];
//   let x = 0;
//   let y = 0;
//   let R = 6378137; //radius of earth

//   let pos = [];

//   for (let i = 0; i < latlon.length; i++) {
//     let xPos =
//       (latlon[i][1] - lonAnchor) * ConvertToRadian(R) * Math.cos(latAnchor);
//     let yPos = (latlon[i][0] - latAnchor) * ConvertToRadian(R);

//     pos.push(xPos, yPos);
//   }
//   return pos;
// }

// function ConvertToRadian(input) {
//   return (input * Math.PI) / 180;
// }

// let latlon = [
//   [9.9847583, 76.578329],
//   [9.984835, 76.578337],
//   [9.984858, 76.578173],
//   [9.984768, 76.578166],
// ];

// GetArea(latlontocart(latlon));

