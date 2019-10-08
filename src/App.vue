<template>
  <div id="app">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div id="navbar">
      <Header />
    </div>
    <router-view />
    <Footer />
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
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  }
};
</script>

<style lang="scss">
@import url("../static/fontawesome/css/all.css");
@font-face {
  font-family: ShorelinesScriptBold;
  src: url("../static/ShorelinesScriptBold.otf") format("opentype");
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  overflow-x: hidden !important;
  padding-top: 120px;
  font-weight:300;
}
</style>
