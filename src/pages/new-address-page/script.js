import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'

export default {
  name: 'new-address',
  components: {
    mainHeader
  },
  data : function () {
    return {
      googleMap: null,
    }
  },

  methods: {
    showMap() {
      if (document.getElementById('googleMap')) {
        this.googleMap = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 16,
          center: {lat: -34.397, lng: 150.644},
          mapTypeId: 'terrain'
        })
      }
    }
  },

  created() {
    this.showMap();
  }
}
