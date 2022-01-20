<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->

  <div>
    <b-navbar
      sticky="true"
      class="navbar navbar-light"
      style="
        background-color: #7746c3;
        color: white;
        padding-left: 24px;
        padding-right: 24px;
      "
    >
      <router-link to="/about">
        <b-navbar-brand
          ><img src="..\src\assets\back.png" width="30px"
        /></b-navbar-brand>
      </router-link>
      <b-collapse
        class="d-flex justify-content-center"
        id="nav-text-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-navbar-nav>
            <b-nav-text
              style="
                color: #ffffff;
                width: 100%;
                font-size: 24px;
                font-family: 'Prompt', sans-serif;
              "
              >ข้อมูลสำหรับผู้ดูแล</b-nav-text
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-link to="/inspectorform"> Form </router-link>
    <router-link to="/inspectorview"> view </router-link>
    <router-link to="/inspectoredit"> Edit </router-link>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap');

.text {
  color: #ffffff;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Prompt', sans-serif;
}

#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
