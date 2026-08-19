import { defineView, ViewType, ViewCalendarLayout } from 'twenty-sdk/define';

import {
  CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTENT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_VIEW_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: CONTENT_CALENDAR_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Content Calendar',
  objectUniversalIdentifier: CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.CALENDAR,
  icon: 'IconCalendar',
  position: 2,
  calendarLayout: ViewCalendarLayout.MONTH,
  calendarFieldMetadataUniversalIdentifier: CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: CONTENT_CALENDAR_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CONTENT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: CONTENT_CALENDAR_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: CONTENT_CALENDAR_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
