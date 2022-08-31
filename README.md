# Zendesk Widget Vue

Typescript functions to work with Zendesk Widget Vue 3

## Install

`npm i zendesk-widget-vue`

## 1. Add plugin

```typescript
import { zendeskPlugin } from 'zendesk-widget-vue';

createApp(App)
  .use(zendeskPlugin)
  .mount('#app');
```

## 2. Call load component

```vue
<template>
  <Zendesk
    :token="zdToken"
    :settings="{ webWidget: {} }"
  />
  <div v-if="zdStatus.isLoading">
    ...Loading
  </div>
  <div v-if="zdStatus.isLoaded">
    JS file was loaded. Zendek chat will be available shortly.
  </div>
  <div v-if="zdStatus.error">
    Error: {{ zdStatus.error }}
  </div>
  <div v-if="zdStatus.isLoaded" style="margin-top:10px;">
    <button @click="() => zendesk.zE('webWidget', 'open')">
      Live Support
    </button>
  </div>
</template>

<script setup lang="ts">
import { useZendesk, Zendesk, zendesk } from 'zendesk-widget-vue';

const zdToken = process.env.VUE_APP_TOKEN;
const { zdStatus } = useZendesk();
</script>
```
