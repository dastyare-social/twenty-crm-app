import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';

import {
  CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_HOME_TAB_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TIMELINE_TAB_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TASKS_TAB_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_NOTES_TAB_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TYPE_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_STATUS_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_PUBLISH_AT_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_MEDIA_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_DESCRIPTION_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_TASKS_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_RECORD_PAGE_NOTES_WIDGET_UNIVERSAL_IDENTIFIER,
  CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_MEDIA_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
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
      ],
    },
    {
      universalIdentifier: CONTENT_RECORD_PAGE_TIMELINE_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Timeline',
      position: 1,
      icon: 'IconTimeline',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: CONTENT_RECORD_PAGE_TIMELINE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Timeline',
          type: 'TIMELINE',
          configuration: {
            configurationType: 'TIMELINE',
          },
        },
      ],
    },
    {
      universalIdentifier: CONTENT_RECORD_PAGE_TASKS_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Tasks',
      position: 2,
      icon: 'IconTaskList',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: CONTENT_RECORD_PAGE_TASKS_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Tasks',
          type: 'TASKS',
          configuration: {
            configurationType: 'TASKS',
          },
        },
      ],
    },
    {
      universalIdentifier: CONTENT_RECORD_PAGE_NOTES_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: CONTENT_RECORD_PAGE_NOTES_WIDGET_UNIVERSAL_IDENTIFIER,
          title: 'Notes',
          type: 'NOTES',
          configuration: {
            configurationType: 'NOTES',
          },
        },
      ],
    },
  ],
});
