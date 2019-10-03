(async function() {
    const getTemplateString = async(name) => {
        const path = `./templates/${name}-template.hbs`;
        const response = await fetch(path);
        return await response.text();
    };

    const getTemplateFunc = async(name) => {
        const templateString = await getTemplateString(name);
        return Handlebars.compile(templateString);
    };

    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial('card', cardTemplate);

    const cardsListFunc = await getTemplateFunc('cards-list');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });

    const getCardParent = (element) => {
        const className = 'contact';
        let node = element.parentNode;
        while (node !== null) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentNode;
        }
        return node;
    };

    const handleDetails = function({ target }) {
        const card = getCardParent(target);
        const details = card.querySelector('.details');
    };

    [...document.getElementsByClassName('detailsBtn')]
    .forEach(btn => btn.addEventListener('click', handleDetails));
})();