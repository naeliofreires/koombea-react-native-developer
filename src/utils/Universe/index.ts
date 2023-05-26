import {api} from '~/api';

async function getAll() {
  let response = [];
  try {
    response = await api.get('universes').then(({data}) => data);
  } catch (error) {
    throw new Error(`an error at getAllUniverses func: ${error}`);
  }
  return response;
}

export const UniverseUtil = {getAll};
