import {
  getCurrentInstance, inject, provide, reactive,
} from 'vue';

import { loadScript } from './loadScript';
import { ZendeskWidgetCommander } from './ZendeskWidgetCommander';
import { ZendeskWidgetSettings } from './ZendeskWidgetSettings';

interface Window {
  /** @see https://developer.zendesk.com/embeddables/docs/widget/introduction#settings */
  zESettings?: ZendeskWidgetSettings;
  /** @see https://developer.zendesk.com/embeddables/docs/widget/introduction#commands */
  zE: ZendeskWidgetCommander;
}

export const zendesk = window as unknown as Window;

const ZENDESK_PROVIDER = 'ZENDESK_PROVIDER';

interface ZendeskStatus {
  isLoaded: boolean;
  isLoading: boolean;
  error?: Error;
}

interface ZendeskProviderProps {
  token: string;
  settings: ZendeskWidgetSettings;
  onSuccess?: () => void;
  onFinish?: () => void;
  onError?: (error: Error) => void;
}

export const useZendeskProvider = ({
  token,
  settings,
  onSuccess,
  onFinish,
  onError,
}: ZendeskProviderProps) => {
  const values = reactive<ZendeskStatus>({
    isLoaded: false,
    isLoading: true,
    error: undefined,
  });
  provide(ZENDESK_PROVIDER, values);

  loadScript({
    script: `https://static.zdassets.com/ekr/snippet.js?key=${token}`,
    onSuccess: () => {
      zendesk.zESettings = settings;
      values.isLoaded = true;
      if (onSuccess) {
        onSuccess();
      }
    },
    onFinish: () => {
      values.isLoading = false;
      if (onFinish) {
        onFinish();
      }
    },
    onError: (error) => {
      values.error = error;
      if (onError) {
        onError(error);
      }
    },
  });
};

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
