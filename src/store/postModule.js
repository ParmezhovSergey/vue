import { getPosts } from "./api";

export const postModule = {
  state: () => ({
    posts: [],
    newPost: {
      id: null,
      title: "",
      body: "",
    },
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "по названию" },
      { value: "body", name: "по содержимому" },
    ],
    searchQuery: "",
    openIdPost: null,
  }),

  getters: {
    posts(state) {
      return state.posts;
    },
    searchQuery(state) {
      return state.searchQuery;
    },
    selectedSort(state) {
      return state.selectedSort;
    },
    sortedPost(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    searchPost(state, getters) {
      return getters.sortedPost.filter((post) =>
        post.title.includes(state.searchQuery)
      );
    },
    openPost(state) {
      const q = state.posts.find((x) => x.id === state.openIdPost);
      return q;
    },
  },

  mutations: {
    //загрузка всех постов
    setPosts(state, posts) {
      state.posts = posts;
    },
    updateId(state, payload) {
      state.newPost.id = payload.id;
    },
    updateInputValueTitle(state, value) {
      state.newPost.title = value;
    },
    updateInputValueBody(state, value) {
      state.newPost.body = value;
    },
    setNewPost(state) {
      state.posts.push(state.newPost);
      state.newPost = {};
    },
    //удаление
    setRemovePost(state, payload) {
      state.posts = state.posts.filter((p) => p.id !== payload.id);
    },
    //сортировка
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    //поиск
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    //отправка ID выбранного поста
    setOpenPost(state, idPost) {
      state.openIdPost = idPost;
    },
  },

  actions: {
    async fetchPosts(context) {
      const settings = await getPosts();
      context.commit("setPosts", settings);
      console.log("post", settings);
    },
  },

  namespaced: true,
};
