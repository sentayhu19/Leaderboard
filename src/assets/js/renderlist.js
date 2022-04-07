/* eslint-disable import/no-cycle */
import { incommigData } from './addAndget';

const showList = document.getElementById('show-list');

export const render = () => {
  let renderlist;
  incommigData.forEach((data) => {
    data.forEach((e) => {
      if (e.user != null && e.score != null) {
        renderlist += `<li>${e.user}   :   ${e.score}  </li>`;
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