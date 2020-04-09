<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase}}</p>
        <hr />
        <input type="email" name id v-model="filterText" />
        <ul>
          <li v-for="(f, index) in filteredFruits" :key="index">{{ f }}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./Components/List.vue";
import { FruitMixin } from "./Mixins/FruitMixin";

export default {
  data() {
    return {
      text: "Hello there"
    };
  },
  mixins: [FruitMixin],
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
