export default {
	name: 'main-index',

	data: function() {
    return {
			activeShuffle: true,
			activeMore: false
		}
		
  },

	methods: {
		changeIndex: function() {
			this.activeShuffle = !this.activeShuffle;
			this.activeMore = !this.activeMore;
    }
  }
};
