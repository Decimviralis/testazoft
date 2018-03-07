import Vue from 'vue'

export default {
  name: 'main-header',

  data: function () {
    return {
      mainChecked: false,
      shuffleChecked: false,
      investingChecked: false,
      howWorkChecked: false,
      faqChecked: false,
      feesChecked: false,
      name: ''
    }
  },

  methods: {
    switchBlock(blockName) {
      this.mainChecked = false;
      this.shuffleChecked = false;
      this.investingChecked = false;
      this.howWorkChecked = false;
      this.faqChecked = false;
      this.feesChecked =  false;
      switch(blockName) {
        case 'main':
          this.mainChecked = true;
          this.shuffleChecked = false;
          this.investingChecked = false;
          this.howWorkChecked = false;
          this.faqChecked = false;
          this.feesChecked =  false;
          this.$router.push({name: 'main'});
          break;
        case 'shuffle':
          this.mainChecked = false;
          this.shuffleChecked = true;
          this.investingChecked = false;
          this.howWorkChecked = false;
          this.faqChecked = false;
          this.feesChecked =  false;
          this.$router.push({name: 'shuffle'});
          break;
        case 'invest':
          this.mainChecked = false;
          this.shuffleChecked = false;
          this.investingChecked = true;
          this.howWorkChecked = false;
          this.faqChecked = false;
          this.feesChecked =  false;
          break;
        case 'howWork':
          this.mainChecked = false;
          this.shuffleChecked = false;
          this.investingChecked = false;
          this.howWorkChecked = true;
          this.faqChecked = false;
          this.feesChecked =  false;
          break;
        case 'faq':
          this.mainChecked = false;
          this.shuffleChecked = false;
          this.investingChecked = false;
          this.howWorkChecked = false;
          this.faqChecked = true;
          this.feesChecked =  false;
          break;
        case 'fees':
          this.mainChecked = false;
          this.shuffleChecked = false;
          this.investingChecked = false;
          this.howWorkChecked = false;
          this.faqChecked = false;
          this.feesChecked =  true;
          break;
      }
    }
  }
}
