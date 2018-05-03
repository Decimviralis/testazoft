import Vue from 'vue'

export default {
  name: 'main-header',

  data: function () {
    return {
      newAddressChecked: false,
      changeAddressChecked: false,
      addressListChecked: false,
      name: ''
    }
  },

  methods: {
    switchBlock(blockName) {
      this.newAddressChecked = false;
      this.changeAddressChecked = false;
      this.addressListChecked = false;
      switch(blockName) {
        case 'new':
          this.newAddressChecked = true;
          this.changeAddressChecked = false;
          this.addressListChecked = false;
          this.$router.push({name: 'new-address'});
          break;
        case 'change':
          this.newAddressChecked = false;
          this.changeAddressChecked = true;
          this.addressListChecked = false;
          this.$router.push({name: 'address-change'});
          break;
        case 'list':
          this.newAddressChecked = false;
          this.changeAddressChecked = false;
          this.addressListChecked = true;
          this.$router.push({name: 'address-list'});
          break;
      }
    }
  }
}
