import { reactive } from 'vue';

export const ZENDESK_PROVIDER = 'ZENDESK_PROVIDER';

export interface ZendeskStatus {
  isLoaded: boolean;
  isLoading: boolean;
  error?: Error
}

export const zendeskPlugin = {
  install: (app) => {
    const values = reactive<ZendeskStatus>({
      isLoaded: false,
      isLoading: true,
      error: undefined,
    });
    app.provide(ZENDESK_PROVIDER, values);
  },
};
