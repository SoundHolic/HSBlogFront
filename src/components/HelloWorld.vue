<template>
  <div class="hello">
    <form>
      <h1 class="hstitle">登录</h1>
      <md-field>
        <md-icon>user</md-icon>
        <label>用户名</label>
        <md-input v-model="noError" required></md-input>
      </md-field>

      <md-field :class="messageClass">
        <md-icon>secret</md-icon>
        <label>密码</label>
        <md-input v-model="required" required type='password'></md-input>
      </md-field>
      <md-switch v-model="hasMessages" class="hsRemeberMe">记住密码</md-switch>
      <div class="hsbtn">
        <md-button class="md-raised" type="submit">登录</md-button>
        <md-button class="md-raised" type="reset">重置</md-button>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      noError: null,
      required: null,
      textarea: null,
      hasMessages: false
    }),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 100px auto;
    width: 50%;
  }

  .hsRemeberMe {
    margin: 10px 0px 0px 40px;
  }

  .hsbtn,
  .hstitle {
    margin: 10px auto;
    text-align: center;
  }
</style>
