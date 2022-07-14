import { IContestant } from '~/common/types/Contestant.interface';

const CONTESTANT_URI = 'https://webcdn.17app.co/campaign/pretest/data.json';

function fetchContestants(): Promise<IContestant[]> {
  return _fetchContestants();
}

function _fetchContestants(): Promise<IContestant[]> {
  return fetch(CONTESTANT_URI, { method: 'GET' })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export { fetchContestants };
