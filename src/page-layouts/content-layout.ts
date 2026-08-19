import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';

import {
  CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_HOME_TAB_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TYPE_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_STATUS_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_PUBLISH_AT_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_MEDIA_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_DESCRIPTION_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_PLATFORM_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_PILLAR_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_CAMPAIGN_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_HOOK_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_FRAMEWORK_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_CTA_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_VIEWS_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_LIKES_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_HANDLES_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_MEDIA_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PLATFORM_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PILLAR_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_CAMPAIGN_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_HOOK_USED_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_FRAMEWORK_USED_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_CTA_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_VIEWS_METRIC_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_LIKES_METRIC_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_HANDLES_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default definePageLayout({
  universalIdentifier: CONTENT_RECORD_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  name: 'Content Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: CONTENT_RECORD_PAGE_HOME_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: CONTENT_RECORD_PAGE_TYPE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Type',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_STATUS_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Status',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_PLATFORM_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Platform',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_PLATFORM_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_PILLAR_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Pillar',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_PILLAR_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_CAMPAIGN_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Campaign',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_CAMPAIGN_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_PUBLISH_AT_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Publish At',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_MEDIA_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Media',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_MEDIA_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_DESCRIPTION_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Description',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_HOOK_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Hook Used',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_HOOK_USED_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_FRAMEWORK_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Framework Used',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_FRAMEWORK_USED_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_CTA_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'CTA Type',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_CTA_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_VIEWS_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Views',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_VIEWS_METRIC_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'READER',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_LIKES_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Likes',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_LIKES_METRIC_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'READER',
          },
        },
        {
          universalIdentifier: CONTENT_RECORD_PAGE_HANDLES_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Handles',
          type: 'FIELD',
          configuration: {
            configurationType: 'FIELD',
            fieldMetadataId: CONTENT_HANDLES_FIELD_UNIVERSAL_IDENTIFIER,
            fieldDisplayMode: 'EDITOR',
          },
        },
      ],
    },
  ],
});
