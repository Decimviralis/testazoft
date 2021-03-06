import Vue from 'vue'
import db from "../../components/firebase/firebaseinit";

export default {
  name: 'address-list',
  components: {

  },
  data : function () {
    return {
      addresses: [],
      addressIndex: 0,
      addressName: '',
      isLoaded: false,
      addressLongitude: 0,
      addressLatitude: 0
    }
  },
  methods: {
    getAllAddresses() {
      db.collection('addresses').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.addresses.push(doc.data());
            console.log(this.addresses);
            this.isLoaded = true;
          })
        })
    },

    goToAddress(index) {
      let self = this;
      self.addressIndex = index;
      self.addressName = self.addresses[index].address_value;
      self.addressLatitude = self.addresses[index].address_latitude;
      self.addressLongitude = self.addresses[index].address_longitude;
      this.$router.push({name: 'address-change', params:{id: self.addresses[index].address_id}});
    },

    searchAddress() {
      let self = this;
      for(let i = 0; i < self.addresses.length; i++) {
        if(String(self.addresses[i]).localeCompare(self.addressName)) {
          self.addresses.push(self.addresses[i]);
          console.log("kek")
        }
      }
    }
  },

  created() {
    this.getAllAddresses();
  }
}
