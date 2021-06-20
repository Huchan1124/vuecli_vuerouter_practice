<template>
  後台產品列表
      <div class="container">
        <div class="text-end mt-4">
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-end">{{item.origin_price}}</td>
              <td class="text-end">{{item.price}}</td>
              <td>
                <!-- 如果item.is_enabled為true>啟用 否>未啟用 -->
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  mounted () {
    this.getProducts();
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            console.log(this.products);
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
}
</script>
