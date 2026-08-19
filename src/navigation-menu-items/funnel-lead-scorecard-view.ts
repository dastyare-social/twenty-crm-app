import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_SCORECARD_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: FUNNEL_LEAD_SCORECARD_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Scorecard Tiers',
  icon: 'IconChartBar',
  position: 1,
  color: 'green',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: FUNNEL_LEAD_SCORECARD_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: FUNNEL_LEADS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
