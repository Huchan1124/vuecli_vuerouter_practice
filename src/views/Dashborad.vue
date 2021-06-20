<template>
 <nav class="navbar navbar-expand-lg navbar-dark  bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">後台導覽列</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link class="nav-link" to="/">回到前台</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/admin/order">後台訂單</router-link>
        </li>
         <li class="nav-item">
        <router-link class="nav-link" to="/" @click.prevent="signout" >登出</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view v-if="checkSuccess"></router-view>
</template>
<script>
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin();
  },
  methods: {
    checkLogin () {
      // 取得token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token === '') {
        alert('您尚未登入請重新登入');
        this.$router.push('/login');
      }
      // 將token存入header
      this.$http.defaults.headers.common.Authorization = `${token}`;
      const api = `${process.env.VUE_APP_API}api/user/check`;
      this.$http.post(api, { api_token: this.token })
        .then((res) => {
          if (res.data.success) {
            this.checkSuccess = true
          }
        })
    },

    signout () {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/');
    }
  }
}
</script>
