<template>
  <!--  -->
  <div class="container">
    <!-- Teams -->
    <div class="_teams py-10">
      <div class="d-flex flex-column my-5">
        <h1 class="font-weight-bold gd-sage">L'équipe</h1>
        <!-- <div class="_separator-sm _separator-xs"></div> -->
      </div>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-3 mb-5 mb-0-lg"
          v-for="(team, i) in ['Aaron Dizele', 'Adina Dizele', 'Didier Numb', 'Thierry']"
          :key="i"
        >
          <div
            class="card __card-sector __card-team"
            style="background-image:url('https://www.amanimedia.cd/wp-content/uploads/2017/08/df7748a73921b2837e36d05e82956929fb51f162.jpg"
          ></div>
          <div class="text-center">
            <h5 class="font-weight-bold mb-0">{{team}}</h5>
            <div>Consultant</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>