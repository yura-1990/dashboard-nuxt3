export const vertical = () => {
  return [
    {
      title: 'Roles',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Roles'],
      children: [
        {
          title: 'Roles-list sdfas dasd fasf asdf asdfsdgdsghsd fgdsf hgsdf hgsdf hgsdf hgsdfg sdfg ',
          icon: { name: 'cil:circle', size: '14' },
          permissions: ['Browse Roles'],
          children: [
            {
              title: 'Roles-list',
              icon: { name: 'cil:circle', size: '14' },
              to: { name: 'roles', target: "_blank"},
              permissions: ['Browse Roles'],
            },
            {
              title: 'Child',
              icon: { name: 'cil:circle', size: '14' },
              permissions: ['Browse Roles'],
              children: [
                {
                  title: 'Roles-list',
                  icon: { name: 'cil:circle', size: '14' },
                  permissions: ['Browse Roles'],
                  children: [
                    {
                      title: 'Roles-list',
                      icon: { name: 'cil:circle', size: '14' },
                      to: { name: 'roles', target: "_blank"},
                      permissions: ['Browse Roles'],
                    },
                    {
                      title: 'Child',
                      icon: { name: 'cil:circle', size: '14' },
                      to: {name: 'home-child'},
                      permissions: ['Browse Roles']
                    }
                  ]
                },
                {
                  title: 'Child',
                  icon: { name: 'cil:circle', size: '14' },
                  to: {name: 'home-child'},
                  permissions: ['Browse Roles']
                }
              ]
            }
          ]
        },
        {
          title: 'Child',
          icon: { name: 'cil:circle', size: '14' },
          to: {name: 'home-child'},
          permissions: ['Browse Roles']
        }
      ]
    },
    {
      title: 'About',
      icon: { name: 'ph:house-light', size: '28' },
      to: { name: 'about' },
      permissions: ['Browse Roles']
    },
    {
      title: 'Theme',
      icon: { name: 'ph:house-light', size: '28' },
      to: { name: 'theme' },
      permissions: ['Browse theme']
    }
  ]
}
