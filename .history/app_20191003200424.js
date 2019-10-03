(async function() {
    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = await getTemplateFunc('cards-list');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });
})();