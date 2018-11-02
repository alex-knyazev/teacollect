import Component from '~/components/Tea/Create/index.vue';

import teaTypesQuery from '~/graphql/teaTypes/getList.gql';
import createTeaMutation from '~/graphql/tea/create.gql';

export default {
  name: 'TeaCreate',

  apollo: {
    teaTypes: {
      query: teaTypesQuery,
      fetchPolicy: 'network-only'
    }
  },

  data() {
    var brewingTimes = Array(10)
      .fill()
      .map((v, i) => i + 1);

    var temperatureDegrees = Array(50)
      .fill()
      .map((v, i) => i + 50)
      .reverse();

    return {
      languages: ['russian', 'chinese'],
      brewingTimes,
      temperatureDegrees,
      newTea: {
        type: '',
        name: '',
        translatedNames: [
          {
            name: '',
            language: ''
          }
        ],
        image: null,
        birthplace: {
          location: {
            lat: 0,
            lng: 0
          },
          name: ''
        },
        brewingTime: [5],
        brewingAmount: [2],
        temperature: [90],
        grams: [3],
        originText: '',
        brewingMethodText: '',
        productionText: '',
        effectText: ''
      }
    };
  },

  methods: {
    saveFile() {
      this.$apollo.mutate({
        mutation: createTeaMutation,
        variables: {
          input: this.newTea
        }
      });
    }
  },

  render: function(createElement) {
    const {
      teaTypes,
      newTea,
      languages,
      brewingTimes,
      temperatureDegrees
    } = this;

    return createElement(Component, {
      props: {
        teaTypes: teaTypes || [],
        newTea,
        languages,
        brewingTimes,
        temperatureDegrees
      },
      on: {
        save: this.saveFile
      }
    });
  }
};
