<script setup>
import { RouterLink, RouterView } from 'vue-router'</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/checkout">Checkout</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
.dropdown-clip {
    overflow: hidden;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all .5s ease-in-out;
    transform: auto;
  }

  .dropdown-enter-from, 
  .dropdown-leave-to {
    opacity: 0;
    transform:translateY(-300px);
  }

  .products-enter-active,
  .products-leave-active {
    transition: all .5s ease-in-out;
  }

  .products-enter-from {
    opacity: 0;
    transform:translateX(300px);
  }
  
  .products-leave-to {
    opacity: 0;
    transform:translateX(-300px);
  }
</style>
