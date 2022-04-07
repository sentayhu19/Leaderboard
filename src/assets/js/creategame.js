/* eslint-disable import/no-cycle */

const axios = require('axios');

const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export class Create {
  constructor(gameid) {
    if (gameid === undefined) {
      this.GameId = 'IO073SYL31FfORar8WmR';
    } else {
      this.GameId = gameid;
    }
  }

 createNewGame = async () => {
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
     });
 }
}
export { BaseUrl };