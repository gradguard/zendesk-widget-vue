interface ZendeskUIString {
  [locale: string]: string;
}

interface ZendeskField {
  id: string | number;
  prefill: ZendeskUIString;
}

export interface ZendeskWidgetSettings {
  /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#analytics */
  analytics?: boolean;
  /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#cookies */
  cookies?: boolean;
  /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#errorreporting */
  errorReporting?: boolean;
  webWidget: {
    answerBot?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#avatar */
      avatar?: {
        url?: string;
        name?: ZendeskUIString;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#contactonlyafterquery */
      contactOnlyAfterQuery?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#search */
      search?: string[];
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#suppress */
      suppress?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#title */
      title?: ZendeskUIString;
    };
    /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#authenticate */
    authenticate?: {
      chat?: {
        jwtFn?: (callback: (jwt: string) => void) => void;
      };
      jwtFn?: (callback: (jwt: string) => void) => void;
    };
    chat?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#concierge */
      concierge?: {
        avatarPath?: string;
        name?: string;
        title?: ZendeskUIString;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#connectonpageload */
      connectOnPageLoad?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#departments */
      departments?: {
        /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#departments.enabled */
        enabled?: string[];
        /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#departments.select */
        select?: string;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#hidewhenoffline */
      hideWhenOffline?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#menuoptions */
      menuOptions?: {
        emailTranscript?: boolean;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#notifications */
      notifications?: {
        mobile?: {
          disable?: boolean;
        };
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#offlineform */
      offlineForm?: {
        greeting?: ZendeskUIString;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#prechatform */
      prechatForm?: {
        greeting?: ZendeskUIString;
        departmentLabel?: ZendeskUIString;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#profilecard */
      profileCard?: {
        avatar?: boolean;
        rating?: boolean;
        title?: boolean;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#position */
      position?: {
        /** @default 'right' */
        horizontal?: 'left' | 'right';
        /** @default 'bottom' */
        vertical?: 'top' | 'bottom';
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#suppress */
      suppress?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#title */
      title?: ZendeskUIString;
    };
    /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#color */
    color?: {
      theme?: string;
      launcher?: string;
      launcherText?: string;
      button?: string;
      resultLists?: string;
      header?: string;
      articleLinks?: string;
    };
    contactForm?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#attachments */
      attachments?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#fields */
      fields?: ZendeskField[];
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#selectticketform */
      selectTicketForm?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#subject */
      subject?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#suppress */
      suppress?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#ticketforms */
      ticketForms?: ReadonlyArray<{
        id: number;
        fields?: ZendeskField[];
      }>;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#title */
      title?: ZendeskUIString;
    };
    contactOptions?: {
      enabled?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#chatlabelonline */
      chatLabelOnline?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#chatlabeloffline */
      chatLabelOffline?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#contactbutton */
      contactButton?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#contactformlabel */
      contactFormLabel?: ZendeskUIString;
    };
    launcher?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#badge */
      badge?: {
        /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#badge.label */
        label?: ZendeskUIString;
        /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#badge.image */
        image?: string;
        /**
         * @see https://developer.zendesk.com/embeddables/docs/widget/settings#badge.layout
         * @default 'image_right'
         */
        layout?:
          | 'image_right'
          | 'image_left'
          | 'image_only'
          | 'text_only';
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#chatlabel */
      chatLabel?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#label */
      label?: ZendeskUIString;
      mobile?: {
        /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#labelvisible */
        labelVisible?: boolean;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#talklabel */
      talkLabel?: ZendeskUIString;
    };
    helpCenter?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#chatbutton */
      chatButton?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#filter */
      filter?: {
        category?: string;
        section?: string;
        label_names?: string;
      };
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#messagebutton */
      messageButton?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#originalarticlebutton */
      originalArticleButton?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#searchplaceholder */
      searchPlaceholder?: ZendeskUIString;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#suppress */
      suppress?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#title */
      title?: ZendeskUIString;
    };
    /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#navigation */
    navigation?: {
      popoutButton?: {
        enabled?: boolean;
      };
    };
    /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#offset */
    offset?: {
      horizontal?: string;
      vertical?: string;
      mobile?: {
        horizontal?: string;
        vertical?: string;
      };
    };
    talk?: {
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#nickname */
      nickname?: string;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#suppress */
      suppress?: boolean;
      /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#title */
      title?: ZendeskUIString;
    };
    /** @see https://developer.zendesk.com/embeddables/docs/widget/settings#zindex */
    zIndex?: number;
  };
}
