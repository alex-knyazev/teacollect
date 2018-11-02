import { mapGetters } from 'vuex';

// import { CUSTOMER_MODULE } from '~/store/customer/state';
// import { CUSTOMER_LIST_FILTER_GETTER } from '~/store/customer/getters';

// import { mapEdges } from '~/utils/gqlDataParser';

import Component from '~/components/Tea/List/index.vue';

import teasQuery from '~/graphql/tea/getList.gql';

export default {
  name: 'TeaList',

  apollo: {
    teas: {
      query: teasQuery,
      fetchPolicy: 'network-only'
    }
  },

  render: function(createElement) {
    const { teas } = this;

    return createElement(Component, {
      props: {
        teas
      }
    });
  }
};
