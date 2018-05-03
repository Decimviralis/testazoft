import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'
import db from '../../components/firebase/firebaseinit'
export default {
  name: 'address-change',
  components: {
    mainHeader
  },
  data : function () {
    return {
      addresses: []
    }
  },


}
