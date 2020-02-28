module.exports = {
    title: 'Sass-notes',
    description: 'sass 学习',
    base: '/sass-notes/',
    port: '3000',
    dest: './dist',
    themeConfig: {
        repo: 'yemuguliunian/sass-notes',
        sidebarDepth: 2,
        nav: [
            { text: '快速入门', link: '/guide/variables'},
        ],
        sidebar: {
            '/guide': [
                {
                    title: '快速入门',  
                    collapsable: false, 
                    sidebarDepth: 1,
                    children: [
                        '/guide/variables'
                    ]
                }
            ]
        }
    },
}