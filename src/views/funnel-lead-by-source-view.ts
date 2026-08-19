import { defineView, ViewType } from 'twenty-sdk/define';

import {
  FUNNEL_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By Source',
  objectUniversalIdentifier: FUNNEL_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconSource',
  position: 0,
  mainGroupByFieldMetadataUniversalIdentifier: FUNNEL_LEAD_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_EMAIL_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_SOURCE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
    {
      universalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 3,
      isVisible: true,
    },
  ],
});
