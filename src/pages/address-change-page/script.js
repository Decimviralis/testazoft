import Vue from 'vue'
import db from '../../components/firebase/firebaseinit'
export default {
  name: 'address-change',
  components: {
  },
  data : function () {
    return {
      addressName: this.$route.params.name,
      markerLatitude: 0,
      markerLongitude: 0,
      map: null,
      googleMap: null,
      marker: null,
      mapOptions: {
        zoom: 13,
        center: {lat:56.501040, lng:84.992451},
        mapTypeId: 'terrain'
      },
      errorMessage: ''
    }
  },
  mounted() {
    this.showMap();
  },

  methods: {
    placeMarker(coords) {
      let self = this;
      self.marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
      });
      self.markerLatitude = self.marker.getPosition().lat();
      self.markerLongitude = self.marker.getPosition().lng();
    },

    showMap() {
      let self = this;
      let mapElement = this.$refs.map;
      if (mapElement) {
        self.googleMap = new google.maps.Map(mapElement, self.mapOptions)
      }
      google.maps.event.addListener(self.googleMap, 'click', function (e) {
        self.placeMarker(e.latLng);
      });
    },
  }
}
