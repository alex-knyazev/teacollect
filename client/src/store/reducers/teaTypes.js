import actionsTypes from '@/constants/actionsTypes';

const initialState = {
  types: [
    {
      id: 1,
      name: 'Зеленый',
    },
    {
      id: 2,
      name: 'Черный',
    },
    {
      id: 3,
      name: 'Пуэр',
    },
    {
      id: 4,
      name: 'Улун',
    },
    {
      id: 5,
      name: 'Белый',
    },
    {
      id: 6,
      name: 'Желтый',
    },
    {
      id: 7,
      name: 'Другой',
    },
  ],
  currentTeaTypes: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.COLLECTION_FILTER_REQUEST:
      return {
        ...state,
        currentTeaTypes: payload.currentTeaTypes,
      };
    default:
      return state;
  }
}
