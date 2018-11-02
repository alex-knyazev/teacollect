<template>
  <div class="list-container">
    <div class="actions">
      <v-btn
        small
        dark
        color="primary"
        nuxt
        to="create"
      >
        <v-icon dark>add</v-icon>
      </v-btn>
    </div>

    <v-card>
      <v-table>
        <v-data-table
          :headers="headers"
          :items="teas"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td>{{ props.item.name }}</td>
          </template>
        </v-data-table>
      </v-table>
    </v-card>
  </div>
</template>


<script>
export default {
  name: 'TeaList',

  props: {
    teas: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      headers: [{ text: 'name', value: 'name' }]
    };
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

