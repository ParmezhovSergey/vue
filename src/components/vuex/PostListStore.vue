<template>
  <div v-if="posts.length > 0">
    <h3 class="posts">Список постов</h3>
    <transition-group name="list">
      <post-item-store
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
    </transition-group>
   
  </div>
  <div v-else class="posts" style="color: red">Список пуст</div>
</template>

<script>

import PostItemStore from "@/components/vuex/PostItemStore.vue";

export default {
  components: {
    PostItemStore,
  },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.posts {
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.title {
  font-weight: 800;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
