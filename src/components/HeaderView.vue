<template>
  <div class="header_container">
    <div id="header">
      <div class="header_top">
        <div class="container">
          <p id="header_logo">
            <a router-link to="/"><img alt="logo" src="../images/logo.png">
            </a>
          </p>
          <p id="header_msg" class="pc_only">
            "Thank you for coming!"
          </p><!-- /#header_msg -->
          <div id="hamburger_menu">
            <span></span>
            <span></span>
            <span></span>
          </div><!-- /#hamburger_menu -->
        </div><!-- /.container -->
      </div><!-- /.header_top -->
      <div class="header bottom">
        <div class="container">
          <nav id="gnav">
            <ul class="gnav">
              <li>
                <router-link to="/">Top</router-link>
              </li>
              <li>
                <router-link to="/Menu">Menu</router-link>
              </li>
              <li>
                <router-link to="/mydata">Bartender</router-link>
              </li>
              <li>
                <router-link to="/game">Game</router-link>
              </li>
              <li>
                <router-link to="/more">More</router-link>
              </li>
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </nav>
        </div><!-- /.container -->
      </div><!-- /.header bottom -->
    </div><!-- /#header -->
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data () {
    return {
      msg: "Thank you for coming!"
    }
  }
}
</script>

<style scoped>
#header {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  background: transparent;
  vertical-align: baseline;
  font-size: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(25, 25, 25, 0.8);
}


/* #header {
  background-color: rgb(25, 25, 25);
}
@media screen and (min-width: 992px) {
.header_top > .container {
  padding: 0;
  }
#hamburger_menu {
    display: none;
}

}

.header_top > .container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
#hamburger_menu span:nth-of-type(1) {
    top: 0;
}
#hamburger_menu span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
}
#hamburger_menu, #hamburger_menu span {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .4s;
    transition: all .4s;
}
#hamburger_menu {
    position: fixed;
    right: 6%;
    z-index: 100;
    width: 24px;
    height: 24px;
    cursor: pointer;
} */

</style>

