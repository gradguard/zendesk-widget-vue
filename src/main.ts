import { createApp } from 'vue';

import App from './App.vue';
import { zendeskPlugin } from './zendesk';

createApp(App)
  .use(zendeskPlugin)
  .mount('#app');
