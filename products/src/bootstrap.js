import faker from 'faker';

//startpoint of app
const mount = (el) => 
{
    let products = '';

    for (let i = 0; i < 5; i++)
    {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    el.innerHTML = products;
};

// context 1 - running file in dev in isolation
    //use local index.html -> has div with known id, immediately render
if (process.env.NODE_ENV === 'development')
{
    const el = document.querySelector('#dev-products');
    //assuming container does not contain this id ^
    if (el)
    {
        mount(el);
    }

}

//context 2 - running file in dev or prod through container
    //no guarantee that will be div with known id, don't immediately render
export { mount };