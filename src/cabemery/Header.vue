<template>
  <div class="bg-white">
      <div style="background-color:#E1E8F2" class="border-bottom">
        <div class="py-1 px-10 _flex _between">
            <div class="_flex">
                <div class="nav-item mr-2 dropdown">
                    <a
                    class="nav-link dropdown-toggle body-1 _flex"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                        <i class="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z"/><path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"/></svg></i>
                        Français
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item body-1" href="#">Français</a></li>
                    <li><a class="dropdown-item body-1" href="#">English</a></li>
                    </ul>
                </div>
                <a class="body-1">
                    <i class="mr-1"><svg viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></i>
                    Rechercher
                </a>
            </div>
            <div class="_flex">
                <div class="mr-4"><i class="fab fa-facebook text-facebook title"></i></div>
                <div class="mr-4"><i class="fab fa-linkedin text-linkedin title"></i></div>
                <div class="mr-4"><i class="fab fa-twitter text-twitter title"></i></div>
                <div class="mr-4"><i class="fab fa-youtube text-youtube title"></i></div>
                <router-link tag="a" to="/devenez-membre" class="_flex">
                    <button class="_button _button-sm _button-outline caption font-weight-bold">S'abonner à la newsletter</button>
                </router-link>
            </div>
        </div>
      </div>
      <!--  -->
    <div class="_flex _between px-10 pt-2">
      <router-link to="/cabemery/accueil" class="font-weight-bold gd-sage _flex">
        <img src="https://cabemery.org/img/logo.e30da39e.png" alt="" width="180">
      </router-link>
      <div class="_flex __link">
          <div class="_flex mr-3"></div>
          <div class="text-center">
            <div>Ouvert: <span class="font-weight-bold body-2">Lundi - Vendredi</span></div>
            <div class="_flex font-weight-bold">
                09H00 - 18H00 | +(1) 2129220040
            </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-10">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mr-5-md active">
            <router-link class="nav-link" to="/">
              Accueil
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <!-- <li class="nav-item mr-5-md">
            <a class="nav-link" href="#">Qui sommes-nous?</a>
          </li> -->
          <li class="nav-item mr-5-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >À propos</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Sommaire</a></li>
              <li><a class="dropdown-item" href="#">Historique</a></li>
              <li><a class="dropdown-item" href="#">Notre vision</a></li>
            </ul>
          </li>
          <li class="nav-item mr-5-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Secteurs</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Ressources naturelles</a></li>
              <li><a class="dropdown-item" href="#">Energie & Infrastructures</a></li>
              <li><a class="dropdown-item" href="#">Banque, Finance & Assurance</a></li>
              <li><a class="dropdown-item" href="#">Commerce & Industrie</a></li>
              <li><a class="dropdown-item" href="#">Famille & Personnes</a></li>
            </ul>
          </li>
          <li class="nav-item mr-5-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Services</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Legal due diligence</a></li>
              <li><a class="dropdown-item" href="#">Immigration</a></li>
              <li><a class="dropdown-item" href="#">Fusions & Acquisitions</a></li>
              <li><a class="dropdown-item" href="#">Contrats commerciaux</a></li>
              <li><a class="dropdown-item" href="#">Restruction des entreprises</a></li>
              <li><a class="dropdown-item" href="#">Protection de marque</a></li>
              <li><a class="dropdown-item" href="#">Project finance</a></li>
              <li><a class="dropdown-item" href="#">Réformes législatives & Réglementaires</a></li>
              <li><a class="dropdown-item" href="#">Contentieux, Médiation & Arbitrage</a></li>
            </ul>
          </li>
          <li class="nav-item mr-5-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Présence</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">New York, USA</a></li>
              <li><a class="dropdown-item" href="#">Johannesburg, RSA</a></li>
              <li><a class="dropdown-item" href="#">Kinshasa, RDC</a></li>
              <li><a class="dropdown-item" href="#">Brazzaville, Congo</a></li>
              <li><a class="dropdown-item" href="#">Lubumbashi, RDC</a></li>
              <li><a class="dropdown-item" href="#">Matadi, RDC</a></li>
            </ul>
          </li>
          <li class="nav-item mr-5-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Actualités & Publications</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Actualités</a></li>
              <li><a class="dropdown-item" href="#">Alertes</a></li>
              <li><a class="dropdown-item" href="#">Publications</a></li>
              <li><a class="dropdown-item" href="#">Événements</a></li>
              <li><a class="dropdown-item" href="#">Webinaires</a></li>
            </ul>
          </li>
          <li class="nav-item mr-5-md">
            <router-link to="/multimedia" class="nav-link">Multimédia</router-link>
          </li>
          <li class="nav-item mr-5-md">
            <router-link class="nav-link" to="/nous-contacter">Nous contacter</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>