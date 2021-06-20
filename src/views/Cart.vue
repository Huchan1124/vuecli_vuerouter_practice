<template>
<!-- 購物車 -->
  <div class="container text-end">
    <button class="btn btn-outline-danger my-3" type="button" @click="deleteAllCarts">清空購物車</button>
          </div>
          <table class="container table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for=" item in cart.carts" :key="item.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                      <i class="fas fa-spinner fa-pulse" ></i>
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" >
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <!-- 購物車商品數量 最小值為1-->
                        <input v-model.number="item.qty" @blur="updateCart(item)"
                        min="1" type="number" class="form-control">
                        <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small  class="text-success">折扣價：</small>
                    {{ item.final_total }}
                  </td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }} </td>
              </tr>
              <tr >
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
          <!-- 表單 -->
           <div class="my-5 row justify-content-center">
          <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <!-- input & 驗證規則 :class="{ 'is-invalid': errors['email'] } 對應Bootstrap的form 驗證規則-->
              <Field id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
              v-model="form.user.email"></Field>
                <!-- 錯誤訊息 -->
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
                 <!-- input & 驗證規則 -->
              <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名" rules="required" v-model="form.user.name"></Field>
                <!-- 錯誤訊息 -->
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
                 <!-- input & 驗證規則 -->
              <Field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話" rules="required" v-model="form.user.tel"></Field>
                 <!-- 錯誤訊息 -->
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
                 <!-- input & 驗證規則 -->
              <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址" rules="required" v-model="form.user.address"></Field>
               <!-- 錯誤訊息 -->
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea name="留言" id="message" class="form-control" cols="30" rows="10" v-model="form.message" ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
          </Form>
        </div>
</template>
<script>
export default {
  name: 'Cart',
  data () {
    return {
      cart: {},
      // 表單結構
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    };
  },
  created () {
    this.getCart();
  },
  methods: {
    // 取得購物車列表
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
    // 刪除單一購物車
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            alert(res.data.message);
            // 重新渲染
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
    // 送出表單
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            // 清空表單
            this.$refs.form.resetForm();
            // 清空留言欄位
            this.form.message = '';
            this.getCart();
          } else {
            alert(res.data.message)
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
