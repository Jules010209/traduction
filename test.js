const translate = require("./index");

(async () => {
    console.log(await translate('Comment vas-tu ?', 'fr', 'en'));
})();