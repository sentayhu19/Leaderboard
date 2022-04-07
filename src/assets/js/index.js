/* eslint-disable import/no-cycle */
import '../style/style.css';
import '../style/font.css';
import { addgame, getgame } from './addAndget';
import { Create } from './creategame';
import render from './renderlist';

const c = new Create();
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const score = document.getElementById('score').value;
  const name = document.getElementById('name').value;

  addgame({ name, score }, c.GameId);
  form.name.value = '';
  form.score.value = '';
});
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  getgame();
  render();
});

getgame();
render();
