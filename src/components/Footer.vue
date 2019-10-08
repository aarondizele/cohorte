<template>
  <div class="container _footer">
    <div class="py-10 row">
      <div class="col-12 col-md-6 col-lg-3 body-1">
        <!-- <img src="../assets/logo_2.png" alt width="70px" class="border-radius-6 mb-2" /> -->
        <p>Répertoire général des entreprises et organismes partenaires en RDC.</p>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ul class="list-unstyled">
          <li class="font-weight-bold _subheading mb-3 text-dark _font2">Secteurs d'activité</li>
          <li v-for="(sector, i) in sectors" :key="i" class="mb-2">
            <a href="" class="_flex body-1 fg-dark fg-dark-hover">
              <i class="far fa-angle-right _fg-primary mr-3"></i> {{sector}}
            </a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ul class="list-unstyled">
          <li class="font-weight-bold _subheading mb-3 text-dark _font2">Newsletter</li>
          <li class="fg-dark body-1">
            <p>Boulevard du 30 Juin, Kinshasa - Gombe <br> contact@espacecongo.cd</p>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <ul class="list-unstyled">
          <li class="font-weight-bold _subheading mb-3 text-dark _font2">Ressources</li>
          <li v-for="(ressource, i) in ressources" :key="i" class="mb-2">
            <a href="" class="_flex body-1 fg-dark fg-dark-hover">
              <i class="far fa-angle-right _fg-primary mr-3"></i> {{ressource}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sectors: ['Café & Restaurants', 'Commerces & Magasins', 'Hôtels', 'Immobilier', 'Sécurité & Protection', 'Transport'],
    ressources: ['Comment ça marche', 'Plans tarifaires', 'À propos de nous', 'Nous contacter']
  })
}
</script>

<style lang="scss" scoped>
._footer {
  background: white;
}
</style>
