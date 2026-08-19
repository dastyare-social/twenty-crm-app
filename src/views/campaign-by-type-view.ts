import { defineView, ViewType } from 'twenty-sdk/define';

import {
  CAMPAIGN_OBJECT_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: CAMPAIGN_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  objectUniversalIdentifier: CAMPAIGN_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconTag',
  position: 1,
  mainGroupByFieldMetadataUniversalIdentifier: CAMPAIGN_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: CAMPAIGN_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: CAMPAIGN_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: CAMPAIGN_BY_TYPE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
