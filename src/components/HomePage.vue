<template>
  <div class="container mt-4">
    <h1>Add Todo : 😜</h1>
    <!-- Name input -->
    <div class="mb-4 mt-4">
      <input
        type="text"
        id="form4Example1"
        class="form-control"
        v-model="title"
      />
      <label class="form-label" for="form4Example1">title</label>
    </div>

    <!-- Message input -->
    <div class="mb-4">
      <textarea
        class="form-control"
        name="message"
        id="form4Example3"
        rows="4"
        v-model="description"
      ></textarea>
      <label class="form-label" for="form4Example3">Message</label>
    </div>

    <!-- Submit button -->
    <button class="btn btn-secondry mb-4" key="" @click="() => addTodo()">
      Add Todo
    </button>

    <div v-if="display" class="shadow text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="mt-4">
      <h2>Your Todo :{{ msg.length }} 📔</h2>
      <span class="text-danger fs-2 fw-bold">
        {{ msg.length <= 0 ? "Empty" : "" }}
      </span>
      <!-- add note -->
      <div class="cards d-flex flex-wrap">
        <div class="card m-2" v-for="elem in msg" :key="elem.id">
          <div class="card-body">
            <h5 class="card-title font-weight-bold">
              {{ elem.title }}
            </h5>
            <p class="card-text">
              {{ elem.body }}
            </p>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteTodo(elem.id)"
            >
              Delete &nbsp;<i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      datas: [
        {
          id: 1,
          title: "man is man",
          description:
            "the card title and make up thebulk of the card's content.",
        },
        {
          id: 1,
          title: "man is man",
          description:
            "the card title and make up thebulk of the card's content.",
        },
        {
          id: 1,
          title: "man is man",
          description:
            "the card title and make up thebulk of the card's content.",
        },
      ],

      description: "",
      title: "",
      msg: [],
      MessageLength: "msg".length,
      display: true,
    };
  },
  methods: {
    async addTodo() {
      if (this.title === "" || this.description === "") {
        alert("Please Add Note");
      } else {
        // send to parents

        this.msg.push({
          title: this.title,
          description: this.description,
          userId: this.userId,
        });

        // using server

        // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        //   method: "POST",
        //   header: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(this.msg),
        // });

        // const data = await res.json();
        // this.msg = data;
        // console.log(data);
        this.title = "";
        this.description = "";
      }
    },
    async deleteTodo(id) {
      this.msg = this.msg.filter((elem) => elem.id !== id);
      // console.log(id);
      // const res = await fetch(
      //   `https://jsonplaceholder.typicode.com/posts/${id}`,
      //   {
      //     method: "DELETE",
      //   }
      // );
      // const data = await res.json();

      // console.log(data);
    },
  },

  async created() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20"
    );
    this.msg = await res.json();
    this.display = false;

    // set userId
    let id = Math.floor(Math.random() * 10000 + 1);
    this.userId = id;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
