<template>
  <div class="post">
    <div>
      <div><strong class="title">Название:</strong> {{ post.title }}</div>
      <div><strong class="title">Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="btn">
      <button
        @click="$router.push(`/vuex/${post.id}`), setOpenPost()"
        class="open"
      >
        открыть
      </button>
      <button @click="setRemovePost" class="remove">удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
  methods: {
    setRemovePost() {
      this.$store.commit("postModule/setRemovePost", { id: this.post.id });
    },
    setOpenPost() {
      this.$store.commit("postModule/setOpenPost",  this.post.id );
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.title {
  font-weight: 800;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.remove {
  background-color: rgb(111, 11, 11);
  color: white;
  border-radius: 5px;
}
.open {
  background-color: green;
  color: white;
  margin-right: 5px;
  border-radius: 5px;
}
</style>
