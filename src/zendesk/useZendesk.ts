import { getCurrentInstance, inject } from 'vue';

import { ZendeskStatus, ZENDESK_PROVIDER } from './zendeskPlugin';
import { ZendeskWidgetCommander } from './ZendeskWidgetCommander';
import { ZendeskWidgetSettings } from './ZendeskWidgetSettings';

interface Window {
  /** @see https://developer.zendesk.com/embeddables/docs/widget/introduction#settings */
  zESettings?: ZendeskWidgetSettings;
  /** @see https://developer.zendesk.com/embeddables/docs/widget/introduction#commands */
  zE: ZendeskWidgetCommander;
}

export const zendesk = window as unknown as Window;

export const useZendesk = () => {
  if (!getCurrentInstance()?.proxy) {
    throw new Error('useZendesk hooks can only be used inside setup() function.');
  }
  const zdStatus = inject<ZendeskStatus>(ZENDESK_PROVIDER);
  if (!zdStatus) {
    throw new Error(
      `No useZendesk ${ZENDESK_PROVIDER} found in Vue context.
      Use 'useZendeskProvider' to set one in the root component.`,
    );
  }

  const setLoading = (value: boolean) => {
    zdStatus.isLoading = value;
  };
  const setLoaded = (value: boolean) => {
    zdStatus.isLoaded = value;
  };
  const setError = (value: Error) => {
    zdStatus.error = value;
  };

  return {
    zdStatus,
    setLoading,
    setLoaded,
    setError,
  };
};
