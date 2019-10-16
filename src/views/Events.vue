<template>
    <!-- Nos prochains evenements -->
    <div class="_sectors py-15" style="background-color:#E1E8F2">
      <div class="px-10 px-20-md">
        <h1 class="font-weight-bold gd-sage mb-5 px-10-md">Nos prochains événements</h1>
      </div>
      <div class="row px-5 px-20-md pt-12 pb-20 _bg-dark pos-relative">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(sector, i) in 10"
          :key="i"
        >
          <div
            class="card __card-sector __card-post mb-5"
            style="background-image:url('https://www.amanimedia.cd/wp-content/uploads/2017/08/df7748a73921b2837e36d05e82956929fb51f162.jpg"
          >
            <div class="__card-content">
              <router-link to="/">
                <h6 class="font-weight-bold">Lutte contre la famine</h6>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Bottom -->
        <div class="pos-absolute pos-bottom-center _pos-bottom-center">
          <button class="_button-plus _button-plus-lg border-0 py-3 gd-sage">S'inscrire à une activité</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    myIndex: 0
  }),
  methods: {
  },
  mounted() {
    // this.showSlides(this.slideIndex);
    // this.initMap();
    // this.carousel();
  }
};
</script>
