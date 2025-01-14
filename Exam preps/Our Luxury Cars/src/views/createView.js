import { html } from '../../node_modules/lit-html/lit-html.js';

import { addCar } from '../services/dataServices.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
        <div class="form form-auto">
        <h2>Share Your Car</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="model" id="model" placeholder="Model"/>
            <input
            type="text"
            name="imageUrl"
            id="car-image"
            placeholder="Your Car Image URL"
            />
            <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
            />
            <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight in Kg"
            />
            <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Top Speed in Kmh"
            />
            <textarea
            id="about"
            name="about"
            placeholder="More About The Car"
            rows="10"
            cols="50"
            ></textarea>
            <button type="submit">Add</button>
        </form>
        </div>
    </section>
`;

export const renderCreate = (ctx) => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

        if (!model || !imageUrl || !price || !weight || !speed || !about) {
            return alert('All fields are required');
        }

        const newCar = {
            model,
            imageUrl,
            price,
            weight,
            speed,
            about
        };

        await addCar(newCar);
        ctx.page.redirect('/dashboard');
    }

    ctx.render(createTemplate(onSubmit));
}