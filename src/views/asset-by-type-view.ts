import { defineView, ViewType } from 'twenty-sdk/define';

import {
  ASSET_OBJECT_UNIVERSAL_IDENTIFIER,
  ASSET_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_TAGS_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  ASSET_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_BY_TYPE_VIEW_TAGS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: ASSET_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  objectUniversalIdentifier: ASSET_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconTag',
  position: 0,
  mainGroupByFieldMetadataUniversalIdentifier: ASSET_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: ASSET_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: ASSET_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: ASSET_BY_TYPE_VIEW_TAGS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_TAGS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
