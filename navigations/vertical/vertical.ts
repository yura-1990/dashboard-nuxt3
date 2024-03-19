export const vertical = () => {
  return [
    {
      title: 'home',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Home'],
      to: '/home',
    },
    {
      title: 'users',
      icon: { name: 'nimbus:user-group', size: '28' },
      permissions: ['Browse Users'],
      to: '/users',
    },
    {
      title: 'roles',
      icon: { name: 'ic:round-lock-open', size: '28' },
      permissions: ['Browse Roles'],
      to: '/roles',
    },
    {
      title: 'permissions',
      icon: { name: 'arcticons:permissionchecker', size: '28' },
      permissions: ['Browse Permissions'],
      to: '/permissions',
    },
    {
      title: 'states',
      icon: { name: 'mingcute:book-5-line', size: '28' },
      permissions: ['Browse States'],
      status: false,
      children: [
        {
          title: 'states lists',
          icon: { name: 'material-symbols:lists-rounded', size: '18' },
          to: '/states',
        },
        {
          title: '51',
          icon: { name: 'ic:twotone-numbers', size: '18' },
          to: '/',
        },
        {
          title: '01',
          icon: { name: 'ic:twotone-numbers', size: '18' },
          to: '/',
        },
      ]
    },
    {
      title: 'salary management',
      icon: { name: 'eos-icons:cluster-management-outlined', size: '28' },
      permissions: ['Browse Salary-management'],
      to: '/salary-management',
    },
    {
      title: 'references',
      icon: { name: 'codicon:references', size: '28' },
      permissions: ['Browse References'],
      status: false,
      children: [
        {
          title: 'references lists',
          icon: { name: 'material-symbols:lists-rounded', size: '18' },
          permissions: ['Browse References-lists'],
          to: '/references/lists',
        }
      ]

    },
  ]
}
