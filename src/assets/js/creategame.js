/* eslint-disable import/no-cycle */
import { addgame, getgame } from './addAndget';

const axios = require('axios');

const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export class create {
  constructor(gameid) {
    this.GameId = 'IO073SYL31FfORar8WmR';
  }

 createNewGame = async (data) => {
   axios({
     method: 'POST',
     url: BaseUrl,
     data: {
       name: 'my game ',
     },
   })
     .then((response) => {
       let clean = JSON.stringify(response.data);
       clean = clean.replace('{"result":"Game with ID:', '');
       clean = clean.replace('added."}', '');
       this.GameId = clean.trim();
     })
     .catch((err) => console.log('Error : ', err));
 }
}
export { BaseUrl };