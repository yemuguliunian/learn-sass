module.exports = {
    title: 'learn-sass',
    description: 'sass 学习',
    base: '/learn-sass/',
    port: '3000',
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'yemuguliunian/learn-sass',
        sidebarDepth: 2,
        nav: [
            { text: '快速入门', link: '/guide/'},
            { 
                text: '扩展', 
                items: [
                    { text: 'sass与less对比', link: '/more/less' },
                ]
            },
            {
                text: '在线编译',
                items: [
                    { text: 'sass 在线编译', link: 'https://www.sassmeister.com/' },
                    { text: 'less 在线编译', link: 'https://lesstester.com/' }
                ]
            }
        ],
        sidebar: {
            '/guide': [
                '/guide/'
            ],
            '/more': [
                '/more/less'
            ]
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top']
}