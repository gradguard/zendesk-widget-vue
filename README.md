# Zendesk Widget Vue

Typescript functions to work with Zendesk Widget Vue 3

## Install

`npm i zendesk-widget-vue`

## 1. Add global provider in your base component

```typescript
import { useZendeskProvider } from 'zendesk-widget-vue';

useZendeskProvider({
  token: 'your-token',
  settings: { webWidget: {} },
});
```

## 2. Call the Zendesk status in a child component

```vue
<template>
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
import { useZendesk, zendesk } from 'zendesk-widget-vue';

const { zdStatus } = useZendesk();
</script>
```
