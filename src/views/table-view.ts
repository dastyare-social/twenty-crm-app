import { defineView, ViewType } from 'twenty-sdk/define';

import {
  CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  CONTENT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_MEDIA_FIELD_UNIVERSAL_IDENTIFIER,
  CONTENT_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
  TABLE_VIEW_UNIVERSAL_IDENTIFIER,
  TABLE_VIEW_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineView({
  universalIdentifier: TABLE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Table View',
  objectUniversalIdentifier: CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 1,
  fields: [
    {
      universalIdentifier: '2db9aadb-453c-4c46-8ab9-4d0c0b4fdef9',
      fieldMetadataUniversalIdentifier: CONTENT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      position: 0,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: '2cb4e8b6-537d-4353-b304-a0a598892e29',
      fieldMetadataUniversalIdentifier: CONTENT_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      position: 1,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: '29d0f4f9-b7bc-47cb-bdce-0a6120280d40',
      fieldMetadataUniversalIdentifier: CONTENT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      position: 2,
      isVisible: true,
      size: 180,  
    },
    {
      universalIdentifier: TABLE_VIEW_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
      fieldMetadataUniversalIdentifier: CONTENT_PUBLISH_AT_FIELD_UNIVERSAL_IDENTIFIER,
      position: 3,
      isVisible: true,
      size: 180,  
    },
    {
      universalIdentifier: 'f98414d6-2cfc-4b06-89db-fef0ebd4f988',
      fieldMetadataUniversalIdentifier: CONTENT_MEDIA_FIELD_UNIVERSAL_IDENTIFIER,
      position: 4,
      isVisible: true,
      size: 250,
    },
    {
      universalIdentifier: '7f4b3eec-4927-4a96-a409-e4a690ebe881',
      fieldMetadataUniversalIdentifier: CONTENT_DESCRIPTION_FIELD_UNIVERSAL_IDENTIFIER,
      position: 5,
      isVisible: true,
      size: 250,
    },
  ],
});
