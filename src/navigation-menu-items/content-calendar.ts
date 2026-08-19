import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';

import {
  CONTENTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  CONTENT_CALENDAR_VIEW_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: CONTENT_CALENDAR_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Content Calendar',
  icon: 'IconCalendar',
  position: 2,
  color: 'orange',
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: CONTENT_CALENDAR_VIEW_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: CONTENTS_FOLDER_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
});
