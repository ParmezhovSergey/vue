<template>
  <div class="btn">
    <input  v-model="searchQuery" placeholder="поиск..."/>
    
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>
  <div>
    <post-form @create="createPost" />
    <post-list :posts="searchPost" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MySelect from "@/components/MySelect.vue";

export default {
  components: {
    PostForm,
    PostList,
    MySelect,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "js4", body: "описание поста" },
        { id: 2, title: "js2", body: "описание поста4" },
        { id: 3, title: "js3", body: "описание поста3" },
      ],
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержимому" },
      ],
      searchQuery: '',
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    // inputTitle(event) {
    //   this.title = event.target.value;
    // },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    searchPost() {
      return this.sortedPost.filter(post=> post.title.includes(this.searchQuery))
    }
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(
  //         post2[newValue]
  //       );
  //     });
  //   },
  // },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;

}
</style>
