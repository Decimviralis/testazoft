import Vue from 'vue'
import mainHeader from '../../components/main-header/main-header'
import rangeRover from '../../components/range-rover/range-rover'
import soloRangeRover from '../../components/solo-range-rover/solo-range-rover'
import quantityRover from '../../components/quantity-range-rover/quantity-range-rover'

export default {
  name: 'shuffle',
  components: {
    mainHeader,
    rangeRover,
    soloRangeRover,
    quantityRover
  },
  data : function () {
    return {
      sendRows: [],
      rowValue: '',
      amountValue: '',
      showFlag: false,
      quantity: '2',
      time: 36200,
      active: true,
      notAllStrings: true,
      randomizeActive: true,
      submitted: false
    }
  },
  methods: {
    addRow() {
      this.showFlag = true;
      if(this.sendRows.length < 1) {
        this.sendRows.push(1);
      } else {
        this.notAllStrings = false;
        return;
      }
    },
    deleteRow() {
      this.sendRows.pop();
      this.notAllStrings = true;
    },
    setActive() {
      this.active = !this.active;
      if(this.active === false) {
        this.time = 0;
      }
    },
    setRandomizeActive() {
      this.randomizeActive = !this.randomizeActive;

    },
    submitHandler() {
      this.submitted = true;

    }

  }
}
