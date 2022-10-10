<template>
	<div class="title-block">
		<p class="constructor__title">
			TitleBlock
		</p>
		<FormInput
			:movel-value="data.title"
			@update:movel-value="onChange('title', $event)"
		/>
		<FormCheckbox
			:movel-value="data['full-screen']"
			@update:movel-value="onChange('full-screen', $event)"
		/>
	</div>
</template>

<script>
import constructorField from '@/mixins/constructor-field.js';

export default {
	name: 'TitleBlock',
	mixins: [constructorField],
	methods:
	{
		onChange(field, val)
		{
			const data = this.data;
			data[field].value = val;

			this.update(data);
		},
	}
};
</script>

<style lang="scss">
</style>
