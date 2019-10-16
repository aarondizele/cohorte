<template>
  <div id="app">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div id="navbar">
      <Header />
      <!-- <HeaderCabemery /> -->
    </div>
    <router-view />
    <div class="__footer">
      <Footer />
    </div>
    <!-- Go to top -->
    <button class="_top" id="scrollBtn" @click="goTop">
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        style="will-change:transform"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16 13L6 23l1.41 1.41L16 15.83l8.59 8.58L26 23 16 13zM4 7h24v2H4z" />
      </svg>
    </button>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeaderCabemery from "@/cabemery/Header";
import Footer from "@/components/Footer";
// When the user scrolls the page, execute myFunction
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // ScrollBar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // NavBar
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

export default {
  components: {
    Footer,
    Header,
    HeaderCabemery
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  mounted() {
    var nua = navigator.userAgent;
    var isAndroid =
      nua.indexOf("Mozilla/5.0") > -1 &&
      nua.indexOf("Android ") > -1 &&
      nua.indexOf("AppleWebKit") > -1 &&
      nua.indexOf("Chrome") === -1;
    if (isAndroid) {
      $("select.form-control")
        .removeClass("form-control")
        .css("width", "100%");
    }
    //
    $('[data-toggle="tooltip"]').tooltip({ boundary: "window" });
    document.getElementById("scrollBtn").style.display = "none";
    //
    window.addEventListener("click", function(event) {
      if (!event.target.matches('[data-toggle="tooltip"]')) {
        $('[data-toggle="tooltip"]').tooltip("hide");
      }
    });
    //
    window.addEventListener("scroll", function(e) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "block";
        }
      } else {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "none";
        }
      }
    });
  }
};
</script>

<style lang="scss">
@import url("../static/fontawesome/css/all.css");
@font-face {
  font-family: ShorelinesScriptBold;
  src: url("../static/ShorelinesScriptBold.otf") format("opentype");
}
@font-face {
  font-family: "Grand Sage";
  src: url("../static/gd-sage-bold.woff2") format("woff2");
}
@font-face {
  font-family: "Grand Sherpa";
  src: url("../static/gdsherpa-regular.woff2") format("woff2");
}
// @font-face {
//   font-family: 'MyWebFont';
//   src: url('webfont.eot'); /* IE9 Compat Modes */
//   src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
//        url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
//        url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
//        url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
// }
#app {
  font-family: "Grand Sherpa", "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  overflow-x: hidden !important;
  position: relative;
  padding-top: 120px;
  padding-bottom: 70px;
  font-weight: 300;
  min-height: 100vh;
}

.__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.gd-sage {
  font-family: "Grand Sage", "Roboto", Helvetica, Arial, sans-serif;
}

/*  */ 
.header__hamburger {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 28px;
  height: 20px;
  padding: 0;
  background: url("./assets/hamburger-menu--dark.svg") no-repeat;
  -webkit-transition: background-image .3s ease-in-out;
  transition: background-image .3s ease-in-out;
}

.hamburger__close {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    border: 0;
    padding: 0;
    background: none;
    background-image: url("./assets/close--white.svg");
    background-position: 0 0;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    cursor: pointer;
}

/* The side navigation menu */

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-width: 1200px) {
  #app {
    padding-top: 60px;
  }
}
</style>
