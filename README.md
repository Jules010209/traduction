# Traduction

```bat
This module allows you to translate text into more than 103 different languages.
```

## Translate a Languages

```js
const translate = require('traduction');

(async () => {
  console.log(await translate('Salut', 'fr', 'en'));
})();
```

Output :

```js
How are you ?
```
<br>

> NOTE : If you forget "await" before translate, the console will be return "Promise { }". So you don't forget "await".

<br><br>

## Module explanation

```js
(async () => {
  console.log(await translate('Salut', 'fr', 'en'));
})();

```

### Params :

```js
TEXT = "Salut"
FROM = "fr" (french)
TO = "en" (english)
```

<br>
<br>
<br>

>## Github
<br>

[Jules010209](https://github.com/Jules010209) - [Yokachi]()