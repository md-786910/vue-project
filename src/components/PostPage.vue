<template>
  <div>
    <div class="container mt-4">
      <h1 class="text-left fw-bold text-secondry">Our Services 👋</h1>
      <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostPage",
  data() {
    return {
      post: null,
    };
  },
  methods: {},
  async created() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  },
};
</script>

// JSONPlaceholder - Free Fake REST API
