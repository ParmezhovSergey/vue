<template>
  <div class="btn">
    <input v-model="searchQuery" @input="searchInput" placeholder="поиск..." />

    <my-select-store />
  </div>
  <div>
    <post-form-store @create="createPost" />
    <post-list-store :posts="searchPost" />
  </div>
</template>

<script>
import MySelectStore from "@/components/vuex/MySelectStore.vue";
import PostFormStore from "@/components/vuex/PostFormStore.vue";
import PostListStore from "@/components/vuex/PostListStore.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VuexPage",

  components: {
    PostListStore,
    PostFormStore,
    MySelectStore,
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
    ...mapGetters({
      searchPost: "postModule/searchPost",
      searchQuery: "postModule/searchQuery",
    }),
  },

  methods: {
    ...mapActions({
      fetchPosts: "postModule/fetchPosts",
    }),

    searchInput(event) {
      this.$store.commit("postModule/setSearchQuery", event.target.value);
    },
  },
};
</script>

<style></style>
