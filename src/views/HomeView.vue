<template>
  <div>
  <button @click="addLike">like</button>
  <button @click="addDisLike">dislike</button>
  <div>Кол-во лайков: {{ likes }}</div>
  <div>Кол-во дизлайков: {{ dislikes }}</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisLike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style scoped></style>
