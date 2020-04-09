export const FruitMixin = {
  data() {
    return {
      fruits: ["Morango", "Mango", "Banano", "Melon"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
};
