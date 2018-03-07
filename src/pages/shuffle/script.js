import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'

export default {
  name: 'shuffle',
  components: {
    mainHeader
  },
  data : function () {
    return {
      sendRows: [],
      rowValue: '',
      amountValue: '',
      showFlag: false
    }
  },
  methods: {
    addRow() {
      this.showFlag = true;
      this.sendRows.push(1);
    }
  }
}
