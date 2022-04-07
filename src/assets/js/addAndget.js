/* eslint-disable import/no-cycle */
import { create, BaseUrl } from './creategame';
import { render } from './renderlist';

const axios = require('axios');

const c = new create();

const incommigData = [];
export const getgame = async (GameId) => {
  if (GameId == undefined) {
    GameId = c.GameId;
    console.log(' if undefined Game ID ', GameId);
  } else {
    console.log('not defined');
  }
  let res;
  console.log('Inside getgame Game ID is ', GameId);
  const getdata = axios(`${BaseUrl}/${GameId}/scores`)
    .then((response) => {
      console.log('RESPONSE ', response);
      incommigData.push(response.data.result);
      console.log('not this user : ');
      console.log('incomming ', incommigData);
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
      const clean = JSON.stringify(response.data);
      console.log('Sucess ', response.data);
      getgame(GameId);
    })
    .catch((err) => console.log('Error not sucess: ', err));
};
export { incommigData };
