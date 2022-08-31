<template>
  <span :v-if="false" />
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';

import { loadScript } from './loadScript';
import { useZendesk, zendesk } from './useZendesk';
import { ZendeskWidgetSettings } from './ZendeskWidgetSettings';

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  settings: {
    type: Object as PropType<ZendeskWidgetSettings>,
    required: true,
  },
  onSuccess: {
    type: Function as PropType<() => void>,
    required: false,
    default: undefined,
  },
  onError: {
    type: Function as PropType<(error: Error) => void>,
    required: false,
    default: undefined,
  },
});

const {
  setLoading,
  setLoaded,
  setError,
} = useZendesk();

loadScript({
  script: `https://static.zdassets.com/ekr/snippet.js?key=${props.token}`,
  onSuccess: () => {
    setLoaded(true);
    zendesk.zESettings = props.settings;
    if (props.onSuccess) {
      props.onSuccess();
    }
  },
  onFinish: () => {
    setLoading(false);
  },
  onError: (error) => {
    setError(error);
    if (props.onError) {
      props.onError(error);
    }
  },
});

</script>
