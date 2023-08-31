interface Header {
  siteLogoUrl: string | null;
  siteTitle: string;
  siteDescription: string;
  favicon: string;
  headerMenuItems: HeaderMenuItems[];
}

interface HeaderMenuItems {
  ID: number;
  title: string;
  url: string;
  children: any[];
  pageSlug: string;
  pageID: number
}