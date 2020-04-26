module.exports = {
  title: 'SunWhys Engine - Documentation',
  description: 'SunWhys Engine is a collaborative game engine developed in C ++ supporting Lua, Javascript and having a graphic editor.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'SunWhys Engine Documenation' }],
    ['meta', { name: 'og:description', content: 'SunWhys Engine is a collaborative game engine developed in C ++ supporting Lua, Javascript and having a graphic editor.' }],
    ['meta', { name: 'og:image', content: 'https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'SunWhys Engine Documentation' }],
    ['meta', { name: 'twitter:description', content: 'SunWhys Engine is a collaborative game engine developed in C ++ supporting Lua, Javascript and having a graphic editor.' }],
    ['meta', { name: 'twitter:image', content: 'https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png' }],
    ['meta', { name: 'theme-color', content: '#b27300' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'Github', link: 'https://github.com/SunWhys' },
      {
        text: 'Links',
        items: [
          { text: 'Discord', link: 'https://discord.gg/NZ2bSnT' },
        ],
      }
    ],
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '',
          'GettingStarted',
          'Documentation',
          'Scripting',
          'Contribution',
          'GameEditor',
          'Community'
        ]
      }
    ],
    logo: 'https://cdn.discordapp.com/attachments/698261922700853273/703353528780980609/logo_idee_3_.png'
  }
}
