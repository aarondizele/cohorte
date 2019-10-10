<template>
  <div class="home mb-20">
    <!-- Nos prochains evenements -->
    <div class="_sectors py-15" style="background-color:#E1E8F2">
      <div class="px-10 px-20-md">
        <h1 class="font-weight-bold gd-sage mb-5 px-20-md">Devenir membre</h1>
      </div>
    </div>
    <div class="container py-10 px-10 px-20-md">
      <div class="row no-gutters">
        <div class="col-12 col-md-8">
          <h2 class="font-weight-medium mb-5">Remplissez le formulaire</h2>
          <form>
            <div class="form-group">
              <label for="">Nom</label>
              <input type="text" class="form-control rounded-0 _button-outline" placeholder="">
            </div>
            <div class="form-group">
              <label for="">Prénom</label>
              <input type="text" class="form-control rounded-0 _button-outline" placeholder="">
            </div>
          </form>
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

<style lang="scss" scoped>
label {
  font-weight:600!important;
}
</style>