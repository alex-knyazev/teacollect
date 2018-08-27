import actionsTypes from '@/constants/actionsTypes';

export const changeCollectionTypeAC = type => ({
  type: actionsTypes.COLLECTION_TYPE_CHANGE,
  payload: type,
});
