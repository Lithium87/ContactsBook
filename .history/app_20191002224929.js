(function() {
    const templateName = 'card-template';
    const cardTemplate = document.getElementById(templateName).innerHTML;
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = Handlebars.compile(document.getElementById('cards-list-template').innerHTML);
    document.getElementById('contact').innerHTML = cardsListFunc({ contacts });
})();