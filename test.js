const { translate } = require("./index.js");

(async () => {
    console.log(await translate('Comment vas-tu ?', 'fr', 'en'));
})();