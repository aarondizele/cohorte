<template>
  <div class="home py-10 _bg-dark text-white">
    <!-- Nos prochains evenements -->
    <!-- <div class="_sectors py-15" style="background-color:#E1E8F2">
      <div class="px-10 px-20-md">
        <h1 class="font-weight-bold gd-sage mb-5 px-20-md">Multimédia</h1>
      </div>
    </div> -->
    <div class="px-5 px-10-md px-20-lg">
      <div class="row mb-10">
        <div class="col-12 col-md-8 col-xl-9">
          <div class="video-box _box-shadow-hover _flex _center">
            <i class="fas fa-play display-4 text-dark"></i>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-3">
          <h2 class="font-weight-bold">From 1.6 Billion to 7 Billion in a Century: How the Earth's Population Exploded</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" v-for="n in 12" :key="n">
          <router-link :to="`/video/${n}`">
            <div class="video-box video-box-sm _box-shadow-hover _flex _center">
              <i class="fas fa-play headline font-weight-bold text-dark"></i>
            </div>
            <p class="mt-1">Meet the 'YINN' & 'YANG' of the ETF World</p>
          </router-link>
        </div>
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
