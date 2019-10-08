<template>
  <div class="bg-white">
    <div class="_flex _between pt-5 px-10">
      <div class="font-weight-bold _flex">
        <img src="../assets/BankersLogoFondBlanc_modifié_item.png" alt width="65" />
        <img src="../assets/BankersLogoFondBlanc_modifié.webp" alt />
      </div>
      <div class="_flex">
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
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-8">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mr-15-lg mr-10-md active">
            <a class="nav-link" href="#">
              Accueil
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <!-- <li class="nav-item mr-15-lg mr-10-md">
            <a class="nav-link" href="#">Qui sommes-nous?</a>
          </li> -->
          <li class="nav-item mr-15-lg mr-10-md dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Qui sommes-nous?</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Idéologie</a>
              <a class="dropdown-item" href="#">Statut</a>
              <a class="dropdown-item" href="#">Valeur</a>
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">Organisation</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Submenu action</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Another submenu action</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item">Action</a>
                      </li>
                      <li>
                        <a class="dropdown-item">Another action</a>
                      </li>
                      <li>
                        <a class="dropdown-item">Something else here</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Subsubmenu action</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Another subsubmenu action</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item mr-15-lg mr-10-md">
            <a class="nav-link" href="#">Publications</a>
          </li>
          <li class="nav-item mr-15-lg mr-10-md">
            <a class="nav-link" href="#">Nous contacter</a>
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