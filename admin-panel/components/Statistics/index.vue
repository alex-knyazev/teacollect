<template>
  <div class="list-container">
    <v-card>
      <v-table>
        <v-data-table 
          :headers="headers" 
          :items="statArray"
        >
          <template 
            slot="items" 
            slot-scope="props"
          >
            <td>
              {{ props.item.routeName }}
            </td>
            <td>
              {{ props.item.amount }}
            </td>
          </template>
        </v-data-table>
      </v-table>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "Statistics",

  props: {
    stat: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      headers: [
        { text: "name", value: "routeName" },
        { text: "amount in popular routes", value: "amount" }
      ]
    };
  },

  computed: {
    statArray() {
      if (!this.stat) {
        return [];
      }
      return Object.keys(this.stat).map(key => ({
        routeName: key,
        amount: this.stat[key]
      }));
    }
  }
};
</script>

<style>
.list-container {
  width: 100%;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>

