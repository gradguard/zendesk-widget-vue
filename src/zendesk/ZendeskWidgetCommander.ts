import { ZendeskWidgetSettings } from './ZendeskWidgetSettings';

interface ZendeskChatDepartment {
  id: number;
  name: string;
  status: unknown;
}

export interface ZendeskWidgetCommander {
  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#clear */
  (type: 'webWidget', command: 'clear'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#close */
  (type: 'webWidget', command: 'close'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#get-display */
  (type: 'webWidget:get', command: 'display'): unknown;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#hide */
  (type: 'webWidget', command: 'hide'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#identify */
  (
    type: 'webWidget',
    command: 'identify',
    data: {
      name: string;
      email: string;
      organization?: string;
    },
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#logout */
  (type: 'webWidget', command: 'logOut'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#on-open */
  (type: 'webWidget:on', command: 'open', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#on-close */
  (type: 'webWidget:on', command: 'close', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#on-userevent */
  (
    type: 'webWidget:on',
    command: 'userEvent',
    callback?: (userEvent: {
      action: string;
      properties: unknown;
      category: string;
    }) => void,
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#open */
  (type: 'webWidget', command: 'open'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#prefill */
  (
    type: 'webWidget',
    command: 'prefill',
    data: {
      name?: {
        value: string;
        readOnly?: boolean;
      };
      email?: {
        value: string;
        readOnly?: boolean;
      };
      phone?: {
        value: string;
        readOnly?: boolean;
      };
    },
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#reset */
  (type: 'webWidget', command: 'reset'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#setlocale */
  (type: 'webWidget', command: 'setLocale', locale: string): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#show */
  (type: 'webWidget', command: 'show'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#toggle */
  (type: 'webWidget', command: 'toggle'): void;

  /** @see https://developer.zendesk.com/api-reference/widget/core/#logout */
  (type: 'webWidget', command: 'logout'): void;

  /**
   * @see https://developer.zendesk.com/embeddables/docs/widget/core#updatepath
   * @see https://developer.zendesk.com/embeddables/docs/widget/chat#updatepath
   */
  (
    type: 'webWidget',
    command: 'updatePath',
    data: {
      title?: string;
      url?: string;
    },
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/core#updatesettings */
  (
    type: 'webWidget',
    command: 'updateSettings',
    settings: ZendeskWidgetSettings,
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/help_center#helpcentersetsuggestions */
  (
    type: 'webWidget',
    command: 'helpCenter:setSuggestions',
    options: {
      url?: boolean;
      search?: string;
      labels?: string[];
    },
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#chatsend */
  (type: 'webWidget', command: 'chat:send', message: string): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#get-chatischatting */
  (type: 'webWidget:get', command: 'chat:isChatting'): boolean;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#get-chatdepartment */
  (
    type: 'webWidget:get',
    command: 'chat:department',
    department: string | number,
  ): ZendeskChatDepartment | undefined;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#get-chatdepartment */
  (
    type: 'webWidget:get',
    command: 'chat:departments',
  ): ZendeskChatDepartment[];

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#chatend */
  (type: 'webWidget:get', command: 'chat:end'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatconnected */
  (type: 'webWidget:on', command: 'chat:connected', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatstart */
  (type: 'webWidget:on', command: 'chat:start', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatend */
  (type: 'webWidget:on', command: 'chat:end', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatstatus */
  (
    type: 'webWidget:on',
    command: 'chat:status',
    callback?: (status: 'online' | 'away' | 'offline') => void,
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatdepartmentstatus */
  (
    type: 'webWidget:on',
    command: 'chat:departmentStatus',
    callback: (department: ZendeskChatDepartment) => void,
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatunreadmessages */
  (
    type: 'webWidget:on',
    command: 'chat:unreadMessages',
    callback: (count: number) => void,
  ): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#popout */
  (type: 'webWidget', command: 'popout'): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#on-chatpopout */
  (type: 'webWidget:on', command: 'chat:popout', callback?: () => void): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#chataddtags */
  (type: 'webWidget', command: 'chat:addTags', tags: string[]): void;

  /** @see https://developer.zendesk.com/embeddables/docs/widget/chat#chatremovetags */
  (
    type: 'webWidget',
    command: 'chat:removeTags',
    tags: string[],
  ): void;
}
