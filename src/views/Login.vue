<template>
    <div class="container my-3">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">
            登入頁面
          </h1>
          <div class="col-8">
            <!-- @submit.prevent="login" 取消預設submit行為-->
            <form id="form" class="form-signin container" @submit.prevent="login">
              <div class="form-floating mb-3">
                <!-- v-model="user.username" 雙向綁定data -->
                <input type="email" class="form-control" id="username"
                  placeholder="name@example.com" required autofocus v-model="user.username">
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <!-- v-model="user.password" 雙向綁定data -->
                <input type="password" class="form-control" id="password"
                  placeholder="Password" required  v-model="user.password">
                <label for="password">Password</label>
              </div>
              <!-- 不用重複綁定login事件 綁定form submit 即可 (第23行)-->
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            // 將token存入cookie
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            // 導頁
            this.$router.push('/admin/products');
          } else {
            alert(res.data.message);
          }
        });
    }
  }
}
</script>
