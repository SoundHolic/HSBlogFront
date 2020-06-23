<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <router-link to="/"><span class="md-title">My Title</span></router-link>
            <div class="md-toolbar-section-end">
              <router-link to="/forget">
                <md-button>找回密码</md-button>
              </router-link>
              <router-link to="/register">
                <md-button>注册</md-button>
              </router-link>
            </div>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">
            Navigation
          </md-toolbar>

          <md-list>
            <router-link to="/index">
              <md-list-item>
                <md-icon>home</md-icon>
                <span class="md-list-item-text">首页</span>
              </md-list-item>
            </router-link>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">归档</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">邮箱</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">废弃站</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">关于</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <router-view />
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>




<script>
  export default {
    name: 'App',
    data: () => ({
      menuVisible: false
    }),
    created(){
        this.$store.dispatch('getUser');
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
  }

  .md-app {
    border: 1px solid rgba(#000, .12);
    height: 100%;
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app-content {
    padding: 16px;
    min-height: 100%;
    padding-bottom: 300px;
  }
  .page-container {
    height: 100%;
    min-height: 700px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
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
