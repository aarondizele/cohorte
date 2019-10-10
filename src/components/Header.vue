<template>
  <div class="bg-white">
    <div class="_flex _between pt-5 px-10">
      <router-link to="/" class="font-weight-bold gd-sage _flex">
        COHORTE
        <!-- <img src="../assets/BankersLogoFondBlanc_modifié_item.png" alt="" width="65">
        <img src="../assets/BankersLogoFondBlanc_modifié.webp" alt=""> -->
      </router-link>
      <router-link tag="a" to="/devenez-membre" class="_flex">
        <button class="_button _button-outline body-2 font-weight-bold">Devenir membre</button>
        <button class="_button _button-outline body-2 font-weight-bold border-left-0">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="42 13.5 116 173"
            viewBox="42 13.5 116 173"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            datatype="color"
            role="img"
            style="transform: rotate(-90deg);"
          >
            <g>
              <path
                fill="#212121"
                d="M147.2 125.1l-40.9 33.8V13.5H90.1v145.4l-38.4-33.8-9.7 12 58.4 49.4 57.6-49.4-10.8-12z"
                data-color="1"
              />
            </g>
          </svg>
        </button>
      </router-link>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-8">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mr-10-md active">
            <a class="nav-link" href="#">
              Accueil
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <!-- <li class="nav-item mr-10-md">
            <a class="nav-link" href="#">Qui sommes-nous?</a>
          </li> -->
          <li class="nav-item mr-10-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Qui sommes-nous</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Idéologie</a></li>
              <li><a class="dropdown-item" href="#">Statut</a></li>
              <li><a class="dropdown-item" href="#">Valeur</a></li>
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">Organisation</a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Comité de direction</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Président</a></li>
                      <li><a class="dropdown-item">Membres du comité</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Comité des sages</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Définition suscinte des rôles membres</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Commissaires aux comptes</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Définition suscinte des rôles membres</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="#">Histoire</a></li>
              <li><a class="dropdown-item" href="#">Partenaire</a></li>
            </ul>
          </li>
          <li class="nav-item mr-10-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Membres</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">Domaines</a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Publiques</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Régies financières</a></li>
                      <li><a class="dropdown-item">Ministères</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Privées</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item">Communication</a></li>
                      <li><a class="dropdown-item">Transports</a></li>
                      <li><a class="dropdown-item">Construction</a></li>
                      <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Industries</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item">Mécanique</a></li>
                          <li><a class="dropdown-item">Métallurgie</a></li>
                          <li><a class="dropdown-item">Vestimentaires</a></li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Finances</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item">Banques</a></li>
                          <li><a class="dropdown-item">Microfinances</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item">Santé</a></li>
                      <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Conseil</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item">Fiscal</a></li>
                          <li><a class="dropdown-item">Audit</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item">Médias</a></li>
                      <li><a class="dropdown-item">Musique</a></li>
                      <li><a class="dropdown-item">Défense</a></li>
                      <li><a class="dropdown-item">Alimentaire</a></li>
                      <li><a class="dropdown-item">Energie</a></li>
                      <li><a class="dropdown-item">Commerce</a></li>
                      <li><a class="dropdown-item">Télécommunication</a></li>
                      <li class="dropdown-submenu">
                        <a class="dropdown-item dropdown-toggle" href="#">Informatique</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item">Cyber Café</a></li>
                          <li><a class="dropdown-item">Fourniture de progiciel</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="#">Publication des membres</a></li>
            </ul>
          </li>
          <li class="nav-item mr-10-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Actualités</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link to="/actualite" class="dropdown-item" href="#">Economique</router-link></li>
              <li><router-link to="/actualite" class="dropdown-item" href="#">Social</router-link></li>
              <li><router-link to="/actualite" class="dropdown-item" href="#">Politique</router-link></li>
              <li><router-link to="/actualite" class="dropdown-item" href="#">Mondial</router-link></li>
            </ul>
          </li>
          <li class="nav-item mr-10-md">
            <router-link to="/evenements" class="nav-link">Evénements</router-link>
          </li>
          <li class="nav-item mr-10-md">
            <router-link to="/multimedia" class="nav-link">Multimédia</router-link>
          </li>
          <li class="nav-item mr-10-md">
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