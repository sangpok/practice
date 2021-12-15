const target = 'https://127.0.0.1:3000';

module.exports = {
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    },
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target,
                changeOrigin: true,
            },
            '/oauth2.0': {
                target: 'https://nid.naver.com/',
            },
        },
    },
};
