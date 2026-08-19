import { defineView, ViewType } from 'twenty-sdk/define';

import {
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: PROJECT_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Active Projects',
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 1,
  fields: [
    {
      universalIdentifier: PROJECT_ACTIVE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_ACTIVE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_ACTIVE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_ACTIVE_VIEW_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 3,
      isVisible: true,
    },
  ],
});
