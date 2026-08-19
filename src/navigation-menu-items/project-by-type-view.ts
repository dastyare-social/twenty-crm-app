import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: PROJECT_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  icon: 'IconTag',
  position: 0,
  color: 'blue',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: PROJECT_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
