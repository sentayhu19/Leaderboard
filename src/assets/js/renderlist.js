/* eslint-disable import/no-cycle */
import { incommigData } from './addAndget';

const showList = document.getElementById('show-list');

const render = () => {
  let renderlist;
  incommigData.forEach((data) => {
    data.forEach((e) => {
      if (e.user != null && e.score != null) {
        renderlist += `<li><span class="username">${e.user} : </span><span>${e.score}</span>  </li>`;
      }
    });
  });
  try {
    renderlist = renderlist.replace('undefined', '');
  } catch {
    showList.innerHTML = renderlist;
  } finally {
    showList.innerHTML = renderlist;
  }
};
export default render;