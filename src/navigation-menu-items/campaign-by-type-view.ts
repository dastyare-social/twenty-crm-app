import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  CAMPAIGNS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: CAMPAIGN_BY_TYPE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'By Type',
  icon: 'IconTag',
  position: 1,
  color: 'purple',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: CAMPAIGN_BY_TYPE_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: CAMPAIGNS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
