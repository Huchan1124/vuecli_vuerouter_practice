<template>
     <div class="container">
        <div class="mt-4">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td style="width: 200px">
                  <div :style="{backgroundImage:`url(${item.imageUrl})`}" style="height: 100px; background-size: cover; background-position: center"
                   ></div>
                </td>
                <td>
                    {{item.title}}
                </td>
                <td>
                  <div class="h5" >{{item.price}}元</div>
                  <del class="h6">原價{{item.origin_price}}元</del>
                  <div class="h5" >現在只要{{item.price}} 元</div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                      <i class="fas fa-spinner fa-pulse"  ></i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger"  @click="addToCart(item.id)">
                    <i class="fas fa-spinner fa-pulse"   ></i>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
           <UserProductModal
            ref="userProductModal"
            :product="product"
            @add-to-cart="addToCart"
          ></UserProductModal>
          </div>
          </div>
</template>

<script>

import UserProductModal from '@/components/UserProductModal.vue';

export default {
  name: 'Products',
  data () {
    return {
      product: {},
      products: []
    };
  },
  components: {
    UserProductModal
  },
  created () {
    this.getProducts();
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url)
        .then((response) => {
          if (response.data.success) {
            this.products = response.data.products;
            console.log(this.products);
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getProduct (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
          this.$refs.userProductModal.openModal();
        } else {
          alert(response.data.message);
        }
      });
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          this.$refs.userProductModal.hideModal();
        } else {
          alert(response.data.message);
        }
      });
    }
  }

};
</script>
