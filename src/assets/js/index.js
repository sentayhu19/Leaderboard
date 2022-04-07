/* eslint-disable import/no-cycle */
import '../style/style.css';
import '../style/font.css';
import { addgame, getgame } from './addAndget';
import { create, BaseUrl } from './creategame';
import { render } from './renderlist';

const c = new create();
const form1 = document.querySelector('#form');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const score = document.getElementById('score').value;
  const name = document.getElementById('name').value;
  const refresh = document.getElementById('refresh');
  console.log('Calliing ', addgame({ name, score }, c.GameId));
  form.name.value = '';
  form.score.value = '';
});
// c.createNewGame();

refresh.addEventListener('click', () => {
  getgame();
  render();
});

getgame();
render();
