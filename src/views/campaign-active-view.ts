import { defineView, ViewType } from 'twenty-sdk/define';

import {
  CAMPAIGN_OBJECT_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: CAMPAIGN_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Active Campaigns',
  objectUniversalIdentifier: CAMPAIGN_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
  fields: [
    {
      universalIdentifier: CAMPAIGN_ACTIVE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: CAMPAIGN_ACTIVE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: CAMPAIGN_ACTIVE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
    {
      universalIdentifier: CAMPAIGN_ACTIVE_VIEW_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CAMPAIGN_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 3,
      isVisible: true,
    },
  ],
});
