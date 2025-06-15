<template>
  <form @submit.prevent>
    <div>Создание поста</div>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="описание"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.input {
  margin-right: 15px;
  border: 2px solid teal;
  border-radius: 5px;
}
.btn {
  border: 2px solid teal;
  border-radius: 5px;
  background: none;
  color: teal;
}
</style>
