<template>
	<div class="content-block">
		<FormInput
			:movel-value="data.title.value"
		/>
		<p>
			Блоки
		</p>
		<div class="content-block__items">
			<transition-group name="content-block__item" tag="div">
				<div
					v-for="item, i in data.blocks"
					:key="`content-block-item-${i}`"
					class="content-block__item"
				>
					<FormInput
						v-for="field, code in item"
						:key="`content-block-item-${i}-field-${code}`"
						:model-value="field"
						class="content-block__item-field"
						@update:model-value="changeItem(i, code, $event)"
					/>
					<div class="content-block__item-delete" @click="deleteItem(i)">
						удалить
					</div>
				</div>
			</transition-group>
		</div>
		<button class="btn btn--green" @click="addItem">
			<span>
				Добавить блок
			</span>
		</button>
	</div>
</template>

<script>
import constructorField from '@/mixins/constructor-field.js';

export default {
	name: 'ContentBlock',
	mixins: [constructorField],
	methods:
	{
		changeItem(idx, field, val)
		{
			const data = JSON.parse(JSON.stringify(this.data));
			data.blocks[idx][field] = val;

			this.update(data);
		},
		addItem()
		{
			const data = this.data;
			data.blocks.push({
				title: '',
				description: '',
				media: '',
			});

			this.update(data);
		},
		deleteItem(idx)
		{
			const data = this.data;
			data.blocks.splice(idx, 1);

			this.update(data);
		},
	},
};
</script>

<style lang="scss">
	.content-block
	{
		.btn
		{
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	}
	.content-block__items
	{
		padding: 10px;
		border: 1px solid #fff;
		border-radius: 10px;
		margin-top: 20px;
	}
	.content-block__item
	{
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.content-block__item-field
		{
			width: 49%;
			margin-bottom: 5px;

			&:nth-child(3)
			{
				width: 100%;
				margin-bottom: 0;
			}
		}


		&:not(:last-child) { margin-bottom: 20px; }

		&-enter-active,
		&-leave-active
		{
			transition: all 0.5s ease;
		}
		&-enter-from,
		&-leave-to
		{
			opacity: 0;
			transform: translateX(30px);
		}
	}
	.content-block__item-delete
	{
		position: absolute;
		right: 0;
		top: -12px;
		font-size: 10px;
		cursor: pointer;
		transition: .2s ease;

		&:hover
		{
			transform: scale(1.1);
		}
	}
</style>
