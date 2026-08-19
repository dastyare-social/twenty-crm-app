import { defineView, ViewType } from 'twenty-sdk/define';

import {
  PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_STATUS_VIEW_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_STATUS_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_STATUS_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_STATUS_VIEW_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: PRODUCT_BY_STATUS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By Status',
  objectUniversalIdentifier: PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconAdjustments',
  position: 0,
  mainGroupByFieldMetadataUniversalIdentifier: PRODUCT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: PRODUCT_BY_STATUS_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: PRODUCT_BY_STATUS_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: PRODUCT_BY_STATUS_VIEW_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
