<template>
  <div class="post">
    <h1>PostParamsID = {{ $route.params.id }}</h1>
    <div>
      <h1>PostID = {{ openPost.id }}</h1>
      <h1>Title = {{ openPost.title }}</h1>
      <h1>Body = {{ openPost.body }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      openPost: "postModule/openPost",
    }),
  },
};
</script>

<style scoped></style>
