<template>
  <section class="about">
    <div class="top">
      <h1 class="title">
        If you want to get to know us, find out if we are available for a project, submit your
        portfolio or interact with us in any other way, here is where you can find us.
      </h1>
    </div>
    <div class="bottom">
      <div class="row">
        <div class="col">
          <p class="cta-title">Join our team</p>
          <a
            class="cta-link"
            href="mailto:careers@todo.to.it"
            target="_blank"
          >careers@todo.to.it</a>
        </div>
        <div class="col">
          <p class="cta-title">Work with us</p>
          <a class="cta-link" href="mailto:info@todo.to.it" target="_blank">info@todo.to.it</a>
        </div>
        <div class="col">
          <p class="cta-title">Follow us</p>
          <ul>
            <li>
              <a
                class="cta-link"
                href="https://www.facebook.com/todotoit/"
                target="_blank"
              >Facebook</a>
            </li>
            <li>
              <a
                class="cta-link"
                href="https://www.instagram.com/todotoit/?hl=en"
                target="_blank"
              >Instagram</a>
            </li>
            <li>
              <a
                class="cta-link"
                href="https://www.flickr.com/photos/todotoit"
                target="_blank"
              >Flickr</a>
            </li>
            <li>
              <a class="cta-link" href="https://vimeo.com/todotoit" target="_blank">Vimeo</a>
            </li>
            <li>
              <a
                class="cta-link"
                href="https://www.linkedin.com/company/todo/"
                target="_blank"
              >Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
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
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  background-color: $col-violet;
  ul {
    list-style-type: none;
    li:before {
      content: '→';
      color: $col-red;
      font-size: 1.5rem;
      padding-right: $padding/2;
    }
    li:hover {
      cursor: pointer;
    }
  }
}
</style>
