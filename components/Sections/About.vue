<template>
  <section class="about">
    <div class="top">
      <h1 v-animate-in class="title">Get in touch with us</h1>
    </div>
    <div class="row">
      <div v-animate-in="{ delay: 0.25 }" class="col">
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
            <a class="cta-link" href="https://vimeo.com/todotoit" target="_blank">Vimeo</a>
          </li>
          <li>
            <img svg-inline src="~/assets/icons/arrow.svg" alt="" />
            <a class="cta-link" href="https://www.linkedin.com/company/todo/" target="_blank">Linkedin</a>
          </li>
        </ul>
      </div>
      <div v-animate-in="{ delay: 0.45 }" class="col">
        <div class="block">
          <p class="cta-title">Join our team</p>
          <a class="cta-link" href="mailto:careers@todo.to.it" target="_blank">careers@todo.to.it</a>
        </div>
        <div class="block">
          <p class="cta-title">Hire us</p>
          <a class="cta-link" href="mailto:hello@todo.to.it" target="_blank">hello@todo.to.it</a>
        </div>
      </div>
      <div v-animate-in="{ delay: 0.55 }" class="col">
        <p class="cta-title">Send us chocolate / Stalk us</p>
        <a class="cta-link" href="https://goo.gl/maps/zQ8usiv8gvesgDcY6" target="_blank">
          Via Bernardino Galliari, 6 <br />
          10125 Torino, Italy
        </a>
      </div>
    </div>
    <div v-animate-in="{ delay: 0.7 }" class="footer">
      <div class="about-image">
        <img class="" src="/about/spamghetto.jpg" />
      </div>
    </div>
    <div class="copyright">
      <p class="cta-small-title">© 2021 TODO s.r.l. / VAT number: IT 09657350014</p>
      <p class="cta-small-title">Client &amp; supplier privacy policy: <a href="/todo-client-supplier-policy-it.pdf" target="_blank">IT</a>-<a href="/todo-client-supplier-policy-en.pdf" target="_blank">EN</a></p>
      <p class="cta-small-title">Cookie policy: <a href="/todo-cookie-policy-it.pdf" target="_blank">IT</a>-<a href="/todo-cookie-policy-en.pdf" target="_blank">EN</a></p>
      <p class="cta-small-title">Privacy policy: <a href="/todo-privacy-policy-it.pdf" target="_blank">IT</a>-<a href="/todo-privacy-policy-en.pdf" target="_blank">EN</a></p>
      <p class="cta-small-title">Copy by <a href="https://www.michellenebiolo.com/" target="_blank">Michelle Nebiolo &#9829;</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  height: 100%;
  background-color: var(--col-primary);
  display: flex;
  flex-direction: column;
  padding-bottom: $padding/1.5;
  align-content: space-between;
  .top {
    height: auto;
    padding-bottom: $padding/1.5;
    transform: translateX(-2px);
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: $padding * 2;
    @media screen and (max-width: $mqMobile) {
      flex-direction: column;
      padding-bottom: 0;
    }
    .col {
      width: 25%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: $mqTablet) {
        padding-bottom: $padding/1.5;
        width: 100%;
      }
      p {
        padding-bottom: $padding/6;
      }
      .block {
        display: flex;
        flex-direction: column;
        &:first-child {
          padding-bottom: $padding / 1.5;
        }
      }
    }
  }
  ul {
    padding-top: 0.5px;
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
          transform: translateY(0.5px);
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
  .footer {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 10rem;
    @media screen and (max-width: $mqTablet) {
      margin-top: 2rem;
    }
    @media screen and (max-width: $mqMobile) {
      margin-top: 5rem;
    }
    .about-image {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
      width: 75%;
      margin-bottom: $padding/1.5;
      @media screen and (max-width: $mqTablet) {
        margin-bottom: $padding/4;
      }
      img {
        width: 100%;
      }
    }
  }
  .copyright {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: $mqTablet) {
      flex-direction: column;
    }
    .cta-small-title {
      font-weight: 300;
      color: white;
      font-size: 0.8rem;
      @media screen and (max-width: $mqTablet) {
        font-size: 0.6rem;
        margin-top: $padding / 4;
      }
      a {
        color: white;
      }
    }
  }
}
</style>
