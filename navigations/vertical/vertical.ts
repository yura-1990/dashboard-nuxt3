export const vertical = () => {
  return [
    {
      title: 'Home',
      icon: { name: 'ph:house-light', size: '28' },
      children: [
        {
          title: 'Mail',
          icon: { name: 'cil:circle', size: '14' },
          children: [
            {
              title: 'Mail',
              icon: { name: 'tabler:arrow-bar-right', size: '12' },
              to: {name: 'home', target: "_blank"},
            },
          ]
        },
        {
          title: 'Child',
          icon: { name: 'cil:circle', size: '14' },
          to: {name: 'child'}
        }
      ]
    },
    {
      title: 'About',
      icon: { name: 'ph:house-light', size: '28' },
      to: { name: 'about' }
    }, 
    {
      title: 'Theme',
      icon: { name: 'ph:house-light', size: '28' },
      to: { name: 'theme' }
    },
  ]
}
