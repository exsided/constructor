import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import clickOutside from '@/plugins/click-outside.js';
import Popup from '@/plugins/popup/index.js';

import FormInput from '@/components/Form/Input.vue';
import FormCheckbox from '@/components/Form/Checkbox.vue';

const Vue = createApp(App);

Vue
	.use(store)
	.use(router)
	.use(Popup)
	.directive('click-outside', clickOutside)
	.component('FormInput', FormInput)
	.component('FormCheckbox', FormCheckbox)
	.mount('#app');
