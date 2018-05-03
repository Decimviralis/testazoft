import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'
import db from "../../components/firebase/firebaseinit";

export default {
  name: 'address-list',
  components: {
    mainHeader
  },
  data : function () {
    return {
      addresses: []
    }
  },

  methods: {
    getAllAddresses() {
      db.collection('addresses').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.addresses.push(doc.data());
            console.log(this.addresses);
          })
        })
    }
  },

  created() {
    this.getAllAddresses();
  }
}
