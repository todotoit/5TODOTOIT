<template>
  <vue100vh>
    <section class="about">
      <div class="top">
        <h1 v-animate-in class="title">
          If you want to get to know us, find out if we are available for a project, submit your portfolio or interact with us in any other way, here is where you can
          find us.
        </h1>
      </div>
      <div class="bottom">
        <div class="row">
          <div v-animate-in="{ delay: 0.25 }" class="col">
            <p class="cta-title">Join our team</p>
            <a class="cta-link" href="mailto:careers@todo.to.it" target="_blank">careers@todo.to.it</a>
          </div>
          <div v-animate-in="{ delay: 0.35 }" class="col">
            <p class="cta-title">Work with us</p>
            <a class="cta-link" href="mailto:hello@todo.to.it" target="_blank">hello@todo.to.it</a>
          </div>
          <div v-animate-in="{ delay: 0.45 }" class="col">
            <p class="cta-title">Follow us</p>
            <ul>
              <li>
                <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
                <a class="cta-link" href="https://www.facebook.com/todotoit/" target="_blank">Facebook</a>
              </li>
              <li>
                <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
                <a class="cta-link" href="https://www.instagram.com/todotoit/?hl=en" target="_blank">Instagram</a>
              </li>
              <li>
                <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
                <a class="cta-link" href="https://www.flickr.com/photos/todotoit" target="_blank">Flickr</a>
              </li>
              <li>
                <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
                <a class="cta-link" href="https://vimeo.com/todotoit" target="_blank">Vimeo</a>
              </li>
              <li>
                <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
                <a class="cta-link" href="https://www.linkedin.com/company/todo/" target="_blank">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div v-animate-in="{ delay: 0.55 }" class="col full">
            <p class="cta-title">Send us flowers and chocolate</p>
            <a
              class="cta-link"
              href="https://goo.gl/maps/zQ8usiv8gvesgDcY6"
              target="_blank"
            >Via Bernardino Galliari, 6 <br />
              10125 Torino, Italy</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p class="cta-small-title">© 2007-2020 TODO s.r.l. / VAT number: IT 09657350014</p>
      </div>
      <h1 id="mama2020">
        We rebranded TODO with <br />
        one single purpose. <br />
        Make Andre mad again!
        <div>#mama2020</div>
      </h1>
    </section>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'
export default {
  name: 'About',
  components: {
    vue100vh
  }
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  background-color: var(--col-primary);
  ul {
    list-style-type: none;
    li {
      transition: margin 0.3s $bezier;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: $padding/2;
      svg {
        margin-right: $padding/4;
        width: 20px;
        height: 20px;
        @media screen and (max-width: $mqMobile) {
          width: 15px;
          height: 15px;
        }
        path {
          stroke: var(--col-secondary);
        }
      }
      &:hover {
        cursor: pointer;
        margin-left: 20px;
        a {
          text-decoration: none;
        }
      }
    }
  }
  .top {
    @media screen and (max-width: $mqMobile) {
      height: auto;
    }
  }
  .col p {
    padding-bottom: $padding/4;
  }
  .copyright {
    position: absolute;
    left: $padding;
    bottom: $padding;
    z-index: 100;
    @media screen and (max-width: $mqMobile) {
      position: static;
      padding: 0;
    }
  }
}
#mama2020 {
  color: var(--col-primary);
  user-select: none;
  div {
    font-size: small;
  }
}
</style>
