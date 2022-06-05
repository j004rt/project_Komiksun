import { createItemTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import '../../component/app-jumbotron';


const Home = {
  render() {
    return `
    <app-welcome></app-welcome>
    <app-category></app-category>
    <h2 class='pt-5 pb-3 mb-3 mt-5 text-center border-bottom'>Rekomendasi</h2>
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0'></div>
    `;
  },

  afterRender() {
    const komikContainer = document.querySelector('#items');
    for (let index = 0; index < 6; ++index) {
      const random = Math.floor(Math.random() * data.komiks.length);
      const item = data.komiks[random];
      komikContainer.innerHTML += createItemTemplate(item);
    }
  },
};

export default Home;
