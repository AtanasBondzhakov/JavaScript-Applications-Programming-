import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyItems } from '../services/dataServices.js';

const myFurnitureTemplate = (items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(item => itemTemplate(item))}
    </div>
`;

const itemTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                    <img src=${item.img} />
                    <p>${item.description}</p>
                    <footer>
                        <p>Price: <span>${item.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${item._id}" class="btn btn-info">Details</a>
                    </div>
            </div>
        </div>
    </div>
`;

export const renderMyFurniture = async (ctx) => {
    const userId = ctx.user?._id;
    const items = await getMyItems(userId);

    ctx.render(myFurnitureTemplate(items));
}