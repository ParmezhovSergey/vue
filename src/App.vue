<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header class="header">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="25"
        height="25"
      />

      <div>
        <div>
          <button class="btn" @click="$router.push('/')">главная</button>
          <button class="btn" @click="$router.push('/vuex')">vuex</button>
          <button class="btn" @click="$router.push('/hooks')">hooks</button>
        </div>
        <nav>
          <RouterLink class="nav" to="/">Like</RouterLink>
          <RouterLink class="nav" to="/posts">Posts</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.nav {
  border-radius: 5px;
  background-color: rgb(209, 230, 104);
  margin-right: 5px;
  color: black;
}
.btn {
  background-color: green;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  color: azure;
}
</style>
