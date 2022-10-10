<template>
	<Popup
		v-if="visible"
		:visible="visible"
		class="section-select"
		@update:visible="update($event)"
	>
		<button
			v-for="section, key in sections"
			:key="`section-select-btn-${key}`"
			class="section-select-btn btn btn--red"
			@click="pushSection(key, section)"
		>
			<span>
				{{ key }}
			</span>
		</button>
	</Popup>
</template>

<script>

export default {
	name: 'SectionSelect',
	props:
	{
		visible:
		{
			type: Boolean,
			default: false
		},
		sections:
		{
			type: Object,
			default: () => {}
		}
	},
	data()
	{
		return {
			showModal: false,
		};
	},
	methods:
	{
		update(state)
		{
			if(!state)
				this.close();
		},
		close()
		{
			this.$emit('close');
		},
		pushSection(field, section)
		{
			this.$emit('pushSection', { name: field, data: section });
			this.close();
		}
	}
};
</script>

<style lang="scss">
	.section-select-btn
	{
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10px;
	}
</style>
