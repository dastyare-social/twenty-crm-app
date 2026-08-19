import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_PERSONAL_BRAND_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  PROJECT_PERSONAL_BRAND_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: PROJECT_PERSONAL_BRAND_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Personal Brand',
  icon: 'IconUser',
  position: 2,
  color: 'blue',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: PROJECT_PERSONAL_BRAND_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: PROJECTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
