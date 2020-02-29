module.exports = {
    title: 'Sass-notes',
    description: 'sass 学习',
    base: '/sass-notes/',
    port: '3000',
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'yemuguliunian/sass-notes',
        sidebarDepth: 2,
        nav: [
            { text: '快速入门', link: '/guide/'},
        ],
        sidebar: {
            '/guide': [
                '/guide/'
            ]
        }
    },
}