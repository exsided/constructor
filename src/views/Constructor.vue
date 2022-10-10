<template>
	<div class="constructor">
		<button class="constructor__add btn btn--blue" @click="showSectionsSelect">
			<span>
				Добавить секцию
			</span>
		</button>
		<div class="constructor__fields">
			<component
				v-for="field, i in content"
				:key="`constructor-field-${i}`"
				:is="field.name"
				:data="field.data"
				class="constructor__field"
				@update="updateContent(i, $event)"
			/>
		</div>
		<SectionSelect
			:visible="sectionsSelect"
			:sections="sectionTypes"
			@pushSection="pushSection"
			@close="hideSectionsSelect"
		/>
	</div>
</template>

<script>
import SectionSelect from '@/components/SectionSelect.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';

export default {
	name: 'Constructor',
	components:
	{
		SectionSelect,
		TitleBlock,
		ContentBlock,
	},
	data()
	{
		return {
			content:
			[
			],
			sectionTypes:
			{
				'title-block':
				{
					title: '',
					'full-screen': false,
				},
				'facts-block':
				{
					title: '',
					dsecription: '',
					facts:
					[
						{
							text: '',
							file: ''
						}
					],
				},
				'content-block':
				{
					title:'',
					blocks:
					[
						{
							title: '',
							description: '',
							media: '',
						},
						{
							title: '',
							description: '',
							media: '',
						},
						{
							title: '',
							description: '',
							media: '',
						},
						{
							title: '',
							description: '',
							media: '',
						}
					]
				}
			},
			sectionsSelect: false,
		};
	},
	methods:
	{
		showSectionsSelect()
		{
			this.sectionsSelect = true;
		},
		hideSectionsSelect()
		{
			this.sectionsSelect = false;
		},
		pushSection(section)
		{
			this.content.push(JSON.parse(JSON.stringify(section)));
		},
		updateContent(idx, data)
		{
			this.content[idx].data = data;
		}
	}
};
</script>

<style lang="scss">
	.constructor
	{
		position: relative;
		z-index: 1;
		padding: 20px;
		flex: 1;
		border-radius: 10px;
		background-color: #33333390;
		backdrop-filter: blur(15px);
	}
	.constructor__add
	{
		display: block;
		margin-left: auto;
	}
	.constructor__title
	{
		text-align: left;
		font-weight: 700;
		color: #fff;
	}
	.constructor__fields
	{
		max-width: 400px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	.constructor__field
	{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>