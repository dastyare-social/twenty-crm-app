import { defineView, ViewType } from 'twenty-sdk/define';

import {
  PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_LICENSE_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_LICENSE_VIEW_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_LICENSE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_LICENSE_VIEW_LICENSE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_LICENSE_VIEW_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: PRODUCT_BY_LICENSE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By License',
  objectUniversalIdentifier: PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconLicense',
  position: 1,
  mainGroupByFieldMetadataUniversalIdentifier: PRODUCT_LICENSE_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: PRODUCT_BY_LICENSE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: PRODUCT_BY_LICENSE_VIEW_LICENSE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_LICENSE_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: PRODUCT_BY_LICENSE_VIEW_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
