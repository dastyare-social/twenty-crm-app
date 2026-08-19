import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: PROJECT_ACTIVE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Active Projects',
  icon: 'IconList',
  position: 1,
  color: 'blue',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: PROJECT_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
