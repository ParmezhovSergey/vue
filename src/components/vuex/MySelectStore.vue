<template>
  <select v-model="selectedSort" @change="sortInput" :options="sortOptions">
    <option  value="">не выбрано</option>
    <option  v-for="option in sortOptions" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapState({
      sortOptions: (state) => state.postModule.sortOptions,
    }),
    ...mapGetters({
     selectedSort: "postModule/selectedSort",
    
    }),
  },

  methods: {
    sortInput(event) {
      this.$store.commit("postModule/setSelectedSort", event.target.value);
    },
  },
};
</script>

<style></style>
