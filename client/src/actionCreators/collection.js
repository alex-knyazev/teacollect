import actionsTypes from '@/constants/actionsTypes';

export const getCollectionAC = () => ({
  type: actionsTypes.COLLECTION_FETCH_REQUEST,
});

export const filterSortsAC = filterInfo => ({
  type: actionsTypes.COLLECTION_FILTER_REQUEST,
  payload: filterInfo,
});
