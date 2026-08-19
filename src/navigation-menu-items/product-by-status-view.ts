import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  PRODUCT_BY_STATUS_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PRODUCTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PRODUCT_BY_STATUS_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: PRODUCT_BY_STATUS_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'By Status',
  icon: 'IconAdjustments',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  folderUniversalIdentifier: PRODUCTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  viewUniversalIdentifier: PRODUCT_BY_STATUS_VIEW_UNIVERSAL_IDENTIFIER,
});
