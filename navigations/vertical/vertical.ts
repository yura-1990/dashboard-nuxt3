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
  ]
}
