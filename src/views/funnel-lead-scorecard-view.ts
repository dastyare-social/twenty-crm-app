import { defineView, ViewType } from 'twenty-sdk/define';

import {
  FUNNEL_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_TIER_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_VIEW_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_VIEW_TIER_FIELD_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: FUNNEL_LEAD_SCORECARD_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Scorecard Tiers',
  objectUniversalIdentifier: FUNNEL_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconChartBar',
  position: 1,
  fields: [
    {
      universalIdentifier: FUNNEL_LEAD_SCORECARD_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: FUNNEL_LEAD_SCORECARD_VIEW_TIER_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_SCORECARD_TIER_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: FUNNEL_LEAD_SCORECARD_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: FUNNEL_LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
