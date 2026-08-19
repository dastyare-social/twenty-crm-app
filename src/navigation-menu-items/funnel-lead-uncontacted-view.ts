import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_UNCONTACTED_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_UNCONTACTED_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: FUNNEL_LEAD_UNCONTACTED_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Uncontacted',
  icon: 'IconUserOff',
  position: 2,
  color: 'green',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: FUNNEL_LEAD_UNCONTACTED_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
