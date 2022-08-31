<template>
  <Zendesk
    :token="zdToken"
    :settings="{ webWidget: {} }"
  />
  <div v-if="zdStatus.isLoading" style="background-color: blue; color: white; padding: 5px;">
    ...Loading
  </div>
  <div v-if="zdStatus.isLoaded" style="background-color: green; color: white; padding: 5px;">
    JS file was loaded. Zendek chat will be available shortly.
  </div>
  <div v-if="zdStatus.error" style="background-color: red; color: white; padding: 5px;">
    Error: {{ zdStatus.error }}
  </div>
  <div v-if="zdStatus.isLoaded" style="margin-top:10px;">
    <button @click="() => zendesk.zE('webWidget', 'open')">
      Live Support
    </button>
  </div>
</template>

<script setup lang="ts">
import { useZendesk, Zendesk, zendesk } from './zendesk';

const zdToken = process.env.VUE_APP_TOKEN;

const { zdStatus } = useZendesk();

</script>
