<template>
  <ZendeskInfo />
</template>

<script setup lang="ts">
import { useZendeskProvider } from './zendesk';
import ZendeskInfo from './ZendeskInfo.vue';

useZendeskProvider({
  token: process.env.VUE_APP_TOKEN ?? '',
  settings: { webWidget: {} },
});
</script>
