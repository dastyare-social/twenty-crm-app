import { defineObject, FieldType, RelationType } from 'twenty-sdk/define';

import {
  PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_LICENSE_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  PRODUCT_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER,
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_PRODUCT_FIELD_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineObject({
  universalIdentifier: PRODUCT_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'product',
  namePlural: 'products',
  labelSingular: 'Product',
  labelPlural: 'Products',
  description: 'Products and offers in the DS catalog.',
  icon: 'IconPackage',
  isSearchable: true,
  isUICreatable: true,
  isUIEditable: true,
  labelIdentifierFieldMetadataUniversalIdentifier:
    PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: PRODUCT_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      description: 'Name of the product or offer.',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: PRODUCT_PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'price',
      label: 'Price',
      description: 'Price of the product.',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: PRODUCT_LICENSE_TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'licenseType',
      label: 'License Type',
      description: 'License type of the product.',
      icon: 'IconLicense',
      options: [
        { id: '6365b5b9-5a40-42b5-8507-5525c1452dfe', position: 0, label: 'Open Source', value: 'OPEN_SOURCE', color: 'green' },
        { id: '9f57012a-22d2-48cd-b16f-2e20322269b9', position: 1, label: 'Licensed', value: 'LICENSED', color: 'blue' },
        { id: 'af9a0926-da78-476f-bfc9-132c988c7489', position: 2, label: 'Proprietary', value: 'PROPRIETARY', color: 'purple' },
        { id: '63f1f5d1-e9f9-49c7-b99b-af95b9bcb817', position: 3, label: 'Service', value: 'SERVICE', color: 'orange' },
      ],
    },
    {
      universalIdentifier: PRODUCT_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Development status of the product.',
      icon: 'IconAdjustments',
      options: [
        { id: '26639f6f-12f0-4f81-b087-abb5cb3b88ca', position: 0, label: 'Live', value: 'LIVE', color: 'green' },
        { id: 'cb844d9b-b077-43d2-a04c-c86479f5369b', position: 1, label: 'In Dev', value: 'IN_DEV', color: 'amber' },
        { id: 'cbbfbcf3-a615-4d91-b58a-875106ec1406', position: 2, label: 'Planned', value: 'PLANNED', color: 'gray' },
      ],
    },
    {
      universalIdentifier: PRODUCT_PROJECTS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.RELATION,
      name: 'projects',
      label: 'Projects',
      description: 'Projects using this product.',
      icon: 'IconFolder',
      isNullable: true,
      relationTargetFieldMetadataUniversalIdentifier: PROJECT_PRODUCT_FIELD_UNIVERSAL_IDENTIFIER,
      relationTargetObjectMetadataUniversalIdentifier: PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
