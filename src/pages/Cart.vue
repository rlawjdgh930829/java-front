<template>
  <div class="cart">cart page</div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({});

    axios.get('/api/cart/items').then(({ data }) => {
      console.log(data);
    });

    return { state };
  },
};
</script>

<style scoped></style>
