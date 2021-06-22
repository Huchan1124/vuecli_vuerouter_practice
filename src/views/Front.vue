<template>
<div class="container-fluid">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">導覽列</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/products">前台產品列表</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/cart">前台購物車</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/login">後台購物車列表</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<router-view></router-view>
</template>
