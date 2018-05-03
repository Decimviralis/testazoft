import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'
import googleMap from '../../components/googleMap/google-maps'
export default {
  name: 'new-address',
  components: {
    mainHeader,
    googleMap
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
//   data : function () {
//     return {
//       map: null,
//       markers: [],
//       currentLat: 0,
//       currentLng: 0,
//       addressValue: "",
//       currentAddress: '',
//       places: [],
//       currentPlace: null
//     }
//   },
//
//   methods: {
//     initMap() {
//       if (document.getElementById('map')) {
//         const options = {
//           zoom: 13,
//           center: {lat: 56.5010, lng: 84.9925}
//         };
//         var map = new
//         google.maps.Map(document.getElementById('map'), options)
//
//       }
//
//       let self = this;
//
//       function addMarker(props) {
//         let marker = new google.maps.Marker({
//           position: props.coords,
//           map: map
//         });
//         self.currentLat = marker.getPosition().lat();
//         self.currentLng = marker.getPosition().lng();
//         self.addressValue = marker.getPosition().lat();
//       }
//
//
//       google.maps.event.addListener(map, 'click', function(event){
//         addMarker({coords: event.latLng});
//       });
//
//       google.maps.event.addDomListener(window, 'load', initialize);
//       function initialize() {
//         var autocomplete = new google.maps.places.Autocomplete(self.addressValue);
//         google.maps.event.addListener(autocomplete, 'place_changed', function () {
//           var places = autocomplete.getplace();
//           var location = "Location" + places.formatted_address;
//           location += "Latitude" + places.geometry.location.A;
//           location += "Longitude" + places.geometry.location.F;
//           location = self.currentAddress;
//         })
//       }
//     },
//
//     geolocate: function() {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.center = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//       });
//     },
//
//     setPlace(place) {
//       this.currentPlace = place;
//     },
//
//   },
//
//   mounted() {
//     this.initMap();
//     this.geolocate();
//   }
// }
