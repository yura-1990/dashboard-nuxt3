export const vertical = () => {
  return [
    {
      title: 'Home',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Home'],
      to: {name: 'home'},
    },
    {
      title: 'Roles',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Roles'],
      to: { name: 'roles' },
    },
    {
      title: 'Users',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Users'],
      to: { name: 'users' },
    },
  ]
}
