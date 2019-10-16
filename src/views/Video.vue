<template>
  <div class="home pt-5 pb-10 _bg-dark text-white">
    <!-- Nos prochains evenements -->
    <!-- <div class="_sectors py-15" style="background-color:#E1E8F2">
      <div class="px-10 px-20-md">
        <h1 class="font-weight-bold gd-sage mb-5 px-20-md">Multimédia</h1>
      </div>
    </div> -->
    <div class="px-5 px-10-md px-20-lg">
        <button class="_button _button-outline _flex _center mb-3 body-1" @click="$router.back()">
            <i class="far fa-arrow-left mr-2"></i>
            Retourner
        </button>
      <div class="row mb-10">
        <div class="col-12 col-md-8 col-xl-9 pr-10-lg">
            <h1 class="font-weight-bold">Vidéo 1</h1>
            <div class="_flex flex-wrap body-1 mt-2 mb-5">
                <div class="_flex mr-5 mr-10-md">
                    <i class="mr-2"><svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg></i>
                    Emery Mukendi Wafwana
                </div>
                <div class="_flex">
                    <i class="mr-2"><svg viewBox="64 64 896 896" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></i>
                    09/10/2019
                </div>
            </div>
          <div class="video-box _flex _center">
            <i class="fas fa-play display-4 text-dark"></i>
          </div>
          <p class="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit rerum doloribus labore! Est, placeat. Omnis error saepe similique numquam quidem corrupti sit. Dolor ea nobis deserunt eum beatae ducimus?
          </p>
        </div>
        <div class="col-12 col-md-4 col-xl-3">
          <h4 class="font-weight-bold mb-10">Next videos</h4>
          <div class="mb-2" v-for="n in 5" :key="n">
            <div class="video-box video-box-xs _flex _center">
                <i class="fas fa-play headline font-weight-bold text-dark"></i>
            </div>
            <p class="mt-1 body-1">Meet the 'YINN' & 'YANG' of the ETF World</p>
            </div>
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
