export default function (type) {
  switch (type) {
    case 'basic': return basicLinks
  }
}

const basicLinks = [
  {
    title: 'router_amr_2d',
    caption: 'router_amr_2d_description',
    icon: 'videogame_asset',
    link: 'amr'
  },
  {
    title: 'router_service',
    caption: 'router_service_description',
    icon: 'settings_phone',
    link: 'service'
  }
]
