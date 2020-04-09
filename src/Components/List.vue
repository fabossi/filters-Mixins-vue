<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="email" name id v-model="filterText" />
    <ul>
      <li v-for="(f, index) in filteredFruits" :key="index">{{ f }}</li>
    </ul>
  </div>
</template>

<script>
import { FruitMixin } from "../Mixins/FruitMixin.js";
export default {
  mixins: [FruitMixin]
};
</script>

<style>
</style>
