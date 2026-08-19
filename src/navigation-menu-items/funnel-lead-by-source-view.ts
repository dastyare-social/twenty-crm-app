import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_BY_SOURCE_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: FUNNEL_LEAD_BY_SOURCE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'By Source',
  icon: 'IconSource',
  position: 0,
  color: 'green',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: FUNNEL_LEAD_BY_SOURCE_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
