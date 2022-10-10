<template>
	<label>
		<input type="checkbox" :ckecked="modelValue">
	</label>
</template>

<script>
export default {
	name: 'FormCheckbox',
	props:
	{
		modelValue:
		{
			type: Boolean,
			default: false
		},
	},
};
</script>

<style lang="scss">
</style>
