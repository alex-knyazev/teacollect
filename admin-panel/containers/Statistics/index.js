import Component from '~/components/Statistics/index.vue';

export default {
  name: 'StatisticsCont',

  data() {
    return {
      accurancy: 0.000002,
      stat: null,
    }
  },

  methods: {
    async getStatistics() {
      const { accurancy } = this;
      const stat = await fetch(`http://localhost:3004/results?accurancy=${accurancy}`).then(res => res.json());
      return stat;
    }
  },

  async created() {
    const stat = await this.getStatistics();
    this.stat = stat;
  },

  render: function(createElement) {
    const { stat } = this;

    return createElement(Component, {
      props: {
        stat,
      }
    });
  }
};
