import { defineView, ViewType } from 'twenty-sdk/define';

import {
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_OWNER_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_OWNER_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: PROJECT_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  objectUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconTag',
  position: 0,
  mainGroupByFieldMetadataUniversalIdentifier: PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_OWNER_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_OWNER_FIELD_UNIVERSAL_IDENTIFIER,
      position: 3,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_START_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 4,
      isVisible: true,
    },
    {
      universalIdentifier: PROJECT_BY_TYPE_VIEW_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: PROJECT_TARGET_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 5,
      isVisible: true,
    },
  ],
});
