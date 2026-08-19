import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  ASSET_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  ASSETS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  ASSET_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: ASSET_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  icon: 'IconTag',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  folderUniversalIdentifier: ASSETS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  viewUniversalIdentifier: ASSET_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
});
