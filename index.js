const axios = require('axios').default;

async function translate(textBase, from, to) {     
    if(!textBase) throw new Error('Can you specify text please !');
    if(!to) throw new Error('Can you specify lang please !');

    let textTest = textBase.split('\n');
    let rep = '';

    if(textTest.length !== 1) {
        for(textss of textTest) {
            rep += await translateOne(textss, from, to) + '\n';
        }

        return await rep;
    } else {
        return await translateOne(textBase, from, to);
    }
}

async function translateOne(text, from, lang) {
    if(text == '') return '';
    if(!lang) return;
    
    try {
        const body = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${lang}&dt=t&q=${text}`);

        return body.data[0][0][0];
    } catch(err) {
        console.error(err);
    }
}

module.exports = translate;