import { defineView, ViewType } from 'twenty-sdk/define';

import {
  ASSET_OBJECT_UNIVERSAL_IDENTIFIER,
  ASSET_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_USAGE_RIGHTS_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_UNLINKED_VIEW_UNIVERSAL_IDENTIFIER,
  ASSET_UNLINKED_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_UNLINKED_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  ASSET_UNLINKED_VIEW_USAGE_RIGHTS_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: ASSET_UNLINKED_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Unlinked',
  objectUniversalIdentifier: ASSET_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUnlink',
  position: 1,
  fields: [
    {
      universalIdentifier: ASSET_UNLINKED_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: ASSET_UNLINKED_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: ASSET_UNLINKED_VIEW_USAGE_RIGHTS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: ASSET_USAGE_RIGHTS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
  ],
});
