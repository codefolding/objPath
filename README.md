# Pathly

[![Build Status](https://travis-ci.org/codefolding/pathly.svg?branch=master)](https://travis-ci.org/codefolding/pathly)

Pathly is a smart libraries for creating javascript objects based on strings.

The need for creating this script came from the often needed functionality to convert data when submitting HTML forms.

```js
var dataHolder = {};
pathly(dataHolder, 'people[0].name.first', 'John');
pathly(dataHolder, 'people[0].name.Last', 'Downey');
pathly(dataHolder, 'people[0].age', '30');
```

This assumes any field inside an HTML form can be named accordingly to their json respectives:

```html
<form>
    <input type='text' name='people[0].name.first'>
    <input type='text' name='people[0].name.last'>
    <input type='text' name='people[0].age'>
</form>
```
