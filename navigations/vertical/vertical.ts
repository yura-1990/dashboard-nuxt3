export const vertical = () => {
  return [
    {
      title: 'home',
      icon: { name: 'ph:house-light', size: '28' },
      permissions: ['Browse Home'],
      to: {name: 'home'},
    },
    {
      title: 'roles',
      icon: { name: 'heroicons-solid:key', size: '28' },
      permissions: ['Browse Roles'],
      to: { name: 'roles' },
    },
    {
      title: 'users',
      icon: { name: 'nimbus:user-group', size: '28' },
      permissions: ['Browse Users'],
      to: { name: 'users' },
    },
  ]
}
