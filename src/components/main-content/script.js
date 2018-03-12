export default {
	name: 'main-content',
	data: function() {
    return {
			activePart: true,
			activeRead: false
		}
		
  },

	methods: {
		changeIndex: function() {
			this.activePart = !this.activePart;
			this.activeRead = !this.activeRead;
    }
  }
};
