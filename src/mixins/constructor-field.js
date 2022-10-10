export default {
	props:
	{
		data:
		{
			type: Object,
			default: null
		}
	},
	methods:
	{
		update(data)
		{
			this.$emit('update', data);
		}
	},
};
