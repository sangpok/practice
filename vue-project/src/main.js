import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';

createApp(App).use(router).mixin(mixins).mount('#app');

window.Kakao.init('0bee6541f39840938ee0b484f735561c');
