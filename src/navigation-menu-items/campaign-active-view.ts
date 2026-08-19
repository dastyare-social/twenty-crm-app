import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  CAMPAIGNS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: CAMPAIGN_ACTIVE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Active Campaigns',
  icon: 'IconList',
  position: 0,
  color: 'purple',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: CAMPAIGN_ACTIVE_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: CAMPAIGNS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
