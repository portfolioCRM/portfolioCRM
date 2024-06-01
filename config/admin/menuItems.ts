
export const AdminMenuList = (t:any)=> 
  [
  {
    title: t('sidebar.dashboard.title'),
    items: [
      { href: '/', text: t('sidebar.dashboard.statistics') },
      { href: '/general', text: t('sidebar.dashboard.general') },
    ],
  },
  {
    title: t('sidebar.experience.title'),
    items: [
      { href: '/experience', text: t('sidebar.experience.list') },
      { href: '/experience/add', text: t('sidebar.experience.add') },
    ],
  },
  {
    title: t('sidebar.project.title'),
    items: [
      { href: '/project', text: t('sidebar.project.list') },
      { href: '/project/add', text: t('sidebar.project.add') },
    ],
  },
  {
    title: t('sidebar.skills.title'),
    items: [
      { href: '/skills', text: t('sidebar.skills.list') },
      { href: '/skills/add', text: t('sidebar.skills.add') },
    ],
  },
  {
    title: t('sidebar.faq.title'),
    items: [
      { href: '/faq', text: t('sidebar.faq.list') },
      { href: '/faq/add', text: t('sidebar.faq.add') },
    ],
  },
  {
    title: t('sidebar.contact.title'),
    items: [
      { href: '/contact', text: t('sidebar.contact.list') },
      { href: '/contact-field', text: t('sidebar.contact.field') },
    ],
  },
  {
    title: t('sidebar.seo.title'),
    items: [
      { href: '/seo', text: t('sidebar.seo.list') },
      { href: '/seo/add', text: t('sidebar.seo.add') },
    ],
  },
];
