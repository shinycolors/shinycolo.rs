<template>
  <div class="context">
    <h1 class="title">Shinycolo.rs</h1>
    <h2 class="subtitle">An Informally ShinyColors website</h2>
    <div class="links">
      <linkButton 
        url="https://github.com/shinycolors/hiori"
        name="Language Patch"
        button-class="button--metro_blue" />
      <!--linkButton 
        url="https://github.com/shinycolors/shinycwp"
        name="ShinyCWP"
        button-class="button--metro_yellow" /-->
      <linkButton 
        url="https://4koma.shinycolo.rs/"
        name="4Koma"
        button-class="button--metro_green" />
      <linkButton 
        url="https://shinycolors.idolmaster.jp/"
        name="Official Site"
        button-class="button--metro_orange" />
      <linkButton 
        url="https://github.com/shinycolors"
        name="Github Organization"
        button-class="button--metro_red" />
    </div>
    <footer class="footer">
      <div class="footer_context">
        2018 <a href="https://shinycolo.rs">ShinyColo.rs</a> &middot; 
        <a href="https://github.com/shinycolors/shinycolo.rs"><i class="fab fa-github"/><span id="view_source"> View Source</span></a><br>
        This site is not endorsed by nor affiliated BANDAI NAMCO.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import linkButton from "./Button.vue";

@Component({
  components: {
    linkButton
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.context {
  padding: 1rem;
  font-family: "Noto Sans", sans-serif;
  background-color: #fff;
  text-align: center;
  display: center;
  justify-content: center;
  align-items: center;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 75%;
  }
}

.title {
  $font-size: 9em;
  font-size: $font-size;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 400%;
    width: 100%;
  }
}

.links {
  font-size: 200%;
  border-spacing: 3px;

  &_button {
    font-size: 50%;
  }
}

.subtitle {
  font-size: 3em;
  font-weight: 300;
  color: gray;
  margin-top: 0.1em;
  // padding: -120px -30px;
  // padding-top: -120px;
  @media (max-width: 600px) {
    font-size: 200%;
    width: 100%;
  }
}

.footer {
  background-color: #fff;
  width: 100%;
  padding-top: 2em;
  &_context {
    margin: 0;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
  }

  @media (min-width: 601px) {
    position: fixed;
    bottom: 12px;
  }
}
</style>
