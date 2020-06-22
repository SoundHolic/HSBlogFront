<template>
  <div id="app">
    <div>
      <md-toolbar class="md-transparent">
        <md-button class="md-icon-button">
<md-icon class="md-warn">home</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">Vue Material</h2>

        <md-button class="md-raised">增加</md-button>
        <md-button class="md-raised md-warn">移除</md-button>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-toolbar>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }
  
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
</style>
