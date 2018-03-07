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
      showFlag: false,
      quantity: '2',
      time: 36200,
      active: true
    }
  },
  methods: {
    addRow() {
      this.showFlag = true;
      this.sendRows.push(1);
    },
    deleteRow() {
      this.sendRows.pop();
    },
    setActive() {
      this.active = !this.active;
      if(this.active === false) {
        this.time = 0;
      }
      console.log("tyt");
    },
    getFomattedTime(time) {
      let timestamp = time;
      let date = new Date();
      date.setTime(timestamp*1000);
      let hours = date.getHours();
      let validMinutes = function () {
        return(date.getMinutes() < 10) ? "0" + date.getMinutes() :date.getMinutes();
      };
      let formatted = "" + hours + ":" + validMinutes();
      return formatted;
    },

  }
}
