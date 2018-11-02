<template>
  <div id="app">
    <v-app
      id="inspire"
      light
    >
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        width="200"
      >
        <v-list dense>
          <v-list-tile
            v-for="(item, i) in items"
            :to="item.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar
        app
        fixed
        clipped-left
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
        <v-toolbar-title class="primary--text">Teacollect admin panel</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
          >
            <nuxt/>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'spa', title: 'Tea', to: '/tea/list' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style>
.layout > div {
  width: 100%;
}
</style>

