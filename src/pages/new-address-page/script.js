import Vue from 'vue'
import db from "../../components/firebase/firebaseinit";

export default {
  name: 'new-address',

  data : function() {
    return {
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
      addressName: '',
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
      self.markerLatitude= self.marker.getPosition().lat();
      self.markerLongitude = self.marker.getPosition().lng();
    },

    showMap() {
      let self = this;
      let mapElement = this.$refs.map;
      if (mapElement) {
        self.googleMap = new google.maps.Map(mapElement, self.mapOptions)
      }
      google.maps.event.addListener(self.googleMap, 'click', function(e) {
        self.placeMarker(e.latLng);
      });
    },

    saveAddress() {
      this.errorMessage = '';
      if(this.markerLongitude!=null && this.markerLatitude!=null && this.addressName.length!=0 && this.marker!=null) {
        db.collection('addresses').add({
          address_value: this.addressName
        })
          .then(
            docRef => {
              this.$router.push({name: 'address-list'});
            })
          .catch(error => console.log(error));
      } else {
        this.errorMessage = "Заполните все поля!";
      }
    }
  }

};

