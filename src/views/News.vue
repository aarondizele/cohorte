<template>
  <!-- Publications -->
  <div class="_publications py-10" style="background-color:#FCF3BA">
    <div class="container">
      <div class="_flex _between">
        <h2 class="font-weight-bold gd-sage my-5">Actualités</h2>
        <button class="_button _button-outline body-2 font-weight-bold">Toutes les actualités</button>
      </div>
      <div class="row my-5">
        <div class="col-12 col-md-6 col-lg-3" v-for="(team, i) in 20" :key="i">
          <div
            class="card __card-sector __card-post mb-5"
            style="background-image:url('https://www.amanimedia.cd/wp-content/uploads/2017/08/df7748a73921b2837e36d05e82956929fb51f162.jpg"
          >
            <div class="__card-header">
              <div class="_flex _between tiny">
                <div class="_flex">
                  <!-- <div class="_avatar"></div> -->
                  <div>
                    <div class="mb-0">Aaron Dizele</div>
                    <div>mai 26 • 1 min</div>
                  </div>
                </div>
                <!-- <div>3 vues</div> -->
              </div>
            </div>
            <div class="__card-content">
              <router-link to="/">
                <h6
                  class="font-weight-bold"
                >SPORT : Avec Neymar et Mbappé, le PSG réalise le deal du siècle</h6>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>