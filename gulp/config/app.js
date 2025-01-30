module.exports = {
    pug: {
        // pretty: true,
        data: {
            dataHead: require('../data/dataHead.json'),
            dataTable: require('../data/dataTable.json'),
            dataFeatures: require('../data/dataFeatures.json'),
            dataFaq: require('../data/dataFaq.json'),
            dataLangs: require('../data/dataLangs.json'),
        },
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        // Вказуємо необхідні формати (окрім woff2)
        formats: ["ttf", "woff"],
    },

    icons: {
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 1
    }
};