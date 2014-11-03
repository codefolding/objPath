# Pathly

[![Build Status](https://travis-ci.org/codefolding/pathly.svg?branch=master)](https://travis-ci.org/codefolding/pathly)

Pathly is a smart script for creating JavaScript objects based on strings with literal paths.

The idea for creating this script came from the often needed functionality to convert data when submitting HTML forms.

```js
var dataHolder = {};
pathly(dataHolder, 'people[0].name.first', 'John');
pathly(dataHolder, 'people[0].name.Last', 'Downey');
pathly(dataHolder, 'people[0].age', '30');
```

This makes possible that any field inside an HTML form can be named accordingly to their JSON respectives, like:

```html
<form>
    <input type='text' name='people[0].name.first'>
    <input type='text' name='people[0].name.last'>
    <input type='text' name='people[0].age'>
</form>
```

And a simple Javascript function that would run through all fields and add those to the `dataHolder` object could easily generate the output wished. For brevity, using jQuery, for example:

```js
var holder = {};
$('form [name]').each(function (e) { pathly(holder, e.target.name, $(e.target).val()); });
// holder object inheriting all parameters defined on the form.
```

## Installation

Pathly can run both server or client-side.
For NodeJS simply run `npm install codefolding/pathly`.

For AMD projets I would recommend install it with [volo](http://volojs.org) through `volo install codefolding/pathly`

For client-side scripts simply include pathly.js to your project. `<script src='pathly.j'></script>`

## Usage

### Node/AMD

```js
var pathly = require('pathly');
pathly(holderObj, 'name', 'value');
```
### Script

```js
pathly(holderObj, 'name', 'value');
```

If you have any suggestions please feel free to contribute by opening an issue or sending a pull request.
