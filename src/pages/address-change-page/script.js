import Vue from 'vue'
import db from '../../components/firebase/firebaseinit'

export default {
  name: 'address-change',
  components: {
  },
  data : function () {
    return {
      addressName: '',
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
    this.getAddressData();
    this.showMap();
    this.getPreviousMarker();
  },
  created() {

  },

  methods: {
    placeMarker(coords) {
      let self = this;
      if (self.marker) {
        self.marker.setMap(null);
      }
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

    getAddressData() {
      db.collection('addresses').where('address_id', '==',
        this.$route.params.id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data());
            this.addressName = doc.data().address_value;
            this.markerLatitude = doc.data().address_latitude;
            this.markerLongitude = doc.data().address_longitude;
          })
        })
    },

    updateAddress() {
      db.collection('addresses').where('address_id', '==',
        this.$route.params.id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              address_value: this.addressName,
              address_latitude: this.markerLatitude,
              address_longitude: this.markerLongitude
            })
              .then(() => {
                this.$router.push({name: 'address-list'})
              })
          })
        })
    },

    getPreviousMarker() {
      let self = this;
      self.marker = new google.maps.Marker({
        position: {lat: self.markerLatitude, lng: self.markerLongitude},
        map: this.googleMap
      });
    }
  }
}
