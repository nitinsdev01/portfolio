<!--./index.js-->

fetch('https://github.com/nitinsdev01/portfolio/blob/main/template.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
