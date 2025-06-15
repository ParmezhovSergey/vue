<template>
  <form @submit.prevent>
    <div>Создание поста</div>
    <input
      v-model="post.title"
      @input="updateInputTitle"
      class="input"
      type="text"
      placeholder="название"
    />
    <input
      v-model="post.body"
      @input="updateInputBody"
      class="input"
      type="text"
      placeholder="описание"
    />
    <button class="btn" @click="setPost" clearPost>Создать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

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
    clearPost() {
      this.post = {
        title: "",
        body: "",
      };
    },
    updateId() {
      this.post.id = Date.now();
      this.$store.commit("postModule/updateId", { id: this.post.id });
      console.log(this.post.id);
    },
    updateInputTitle(event) {
      this.$store.commit(
        "postModule/updateInputValueTitle",
        event.target.value
      );
    },
    updateInputBody(event) {
      this.$store.commit("postModule/updateInputValueBody", event.target.value);
    },
    setPost() {
      this.updateId();
      this.setNewPost();
      this.clearPost();
    },
    ...mapMutations({
      setNewPost: "postModule/setNewPost",
    }),
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
