<template>
  <div class="hello">
    <md-tabs md-alignment="centered" class="md-transparent">
      <md-tab md-label="登录">
        <form>
          <md-field>
            <md-icon>person</md-icon>
            <label>用户名/手机</label>
            <md-input v-model="noError" required></md-input>
          </md-field>
          <md-field>
            <md-icon>lock</md-icon>
            <label>密码</label>
            <md-input v-model="required" required type='password'></md-input>
          </md-field>
          <md-switch v-model="hasMessages" >记住密码</md-switch>
          <div>
            <md-button class="md-raised" type="submit">登录</md-button>
            <md-button class="md-raised" type="reset">重置</md-button>
          </div>
        </form>
      </md-tab>
      <md-tab md-label="注册">
        <form>
          <md-field>
            <md-icon>person</md-icon>
            <label>用户名</label>
            <md-input v-model="noError" required></md-input>
          </md-field>
          <md-field>
            <md-icon>phone_iphone</md-icon>
            <label>手机号</label>
            <md-input v-model="noError" required></md-input>
          </md-field>
          <md-field>
            <md-icon>mail</md-icon>
            <label>邮箱</label>
            <md-input v-model="noError" required></md-input>
          </md-field>
          <md-field>
            <md-icon>lock</md-icon>
            <label>密码</label>
            <md-input v-model="required" required type='password'></md-input>
          </md-field>
          <div>
            <md-button class="md-raised" type="submit">注册</md-button>
            <md-button class="md-raised" type="reset">重置</md-button>
          </div>
        </form>
      </md-tab>
    </md-tabs>
  </div>

</template>

<script>
  export default {
    name: 'LoginOrRegi',
    data: () => ({
      hasMessages: null,
      noError: null,
      required: null
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 100px auto;
    width: 80%;
  }
</style>
