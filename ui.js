<!--./index.js-->

fetch('./template.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
