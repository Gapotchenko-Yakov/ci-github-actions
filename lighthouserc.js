module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:recommended',
            // assertions: {
            //     // "errors-in-console": "off",
            // },
        },
    },
};