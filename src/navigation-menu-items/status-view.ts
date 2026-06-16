import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  CONTENTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  STATUS_VIEW_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  STATUS_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: STATUS_VIEW_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Status View',
  icon: 'IconKanban',
  position: 0,
  color: 'orange',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: STATUS_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: CONTENTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
