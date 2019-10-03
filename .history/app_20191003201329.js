(async function() {
    const getTemplateString = async(name) => {
        const path = `./templates/${name}-template.hbs`;
        const response = await fetch(path);
        return response.text();
    };

    const getTemplateFunc = async(name) => {
        const templateString = await getTemplateString(name);
        return Handlebars.compile(templateString);
    };

    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = await getTemplateFunc('cards-list');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });
})();