<template>
  <div>
    <div class="container mt-4">
      <div
        class="accordion accordion-flush"
        id="accordionFlushExample"
        v-for="elem in postData"
        v-bind:key="elem.id"
      >
        <div class="accordion-item border border-1 m-2">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <span class="badge rounded-pill badge-success">{{
                elem.id
              }}</span>
              &nbsp; {{ elem.title }}
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
//
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      postData: [],
      url: "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=30",
    };
  },
  methods: {
    async getPostFetch() {
      const res = await fetch(this.url);
      const data = await res.json();
      this.postData = data;
      // console.log(data);
    },
  },

  created() {
    this.getPostFetch();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
