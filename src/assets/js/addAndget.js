/* eslint-disable import/no-cycle */
import { Create, BaseUrl } from './creategame';
import render from './renderlist';

const axios = require('axios');

const c = new Create();

const incommigData = [];
export const getgame = async (GameId) => {
  if (GameId === undefined) {
    GameId = c.GameId;
  }
  axios(`${BaseUrl}/${GameId}/scores`)
    .then((response) => {
      incommigData.push(response.data.result);
      render();
    });
};
export const addgame = async (data, GameId) => {
  const BaseUrlAdd = `${BaseUrl}/${GameId}/scores`;
  await axios({
    method: 'POST',
    url: BaseUrlAdd,
    data: {
      user: data.name,
      score: data.score,

    },
  })
    .then((response) => {
      JSON.stringify(response.data);
      getgame(GameId);
    });
};
export { incommigData };
