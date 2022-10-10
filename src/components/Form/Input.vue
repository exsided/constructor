<template>
	<label class="form-input">
		<span>
			{{ label }}
		</span>
		<input
			:value="modelValue"
			:placeholder="placeholder"
			type="text"
			@input="update($event.target.value)"
		>
	</label>
</template>

<script>
export default {
	name: 'FormInput',
	props:
	{
		modelValue:
		{
			type: String,
			default: ''
		},
		placeholder:
		{
			type: String,
			default: ''
		},
		label:
		{
			type: String,
			default: ''
		}
	},
	methods:
	{
		update(val)
		{
			this.$emit('update:model-value', val);
		}
	}
};
</script>

<style lang="scss">
	.form-input
	{
		position: relative;
		display: block;
		z-index: 1;
		width: 100%;

		input
		{
			display: block;
			width: 100%;
			padding: 0;
		}
	}
</style>
