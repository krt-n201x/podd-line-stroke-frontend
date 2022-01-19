<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->

  <div>
  <b-navbar class="navbar navbar-light" style="background-color: #7746C3; color: white; padding-left: 24px; padding-right: 24px;">
    <router-link to="/about"> <b-navbar-brand><img src="..\src\assets\back.png" width="30px"></b-navbar-brand> </router-link>
    <b-collapse class="d-flex justify-content-center" id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/"> <b-nav-text style="color: #ffffff; width: 100%; font-size: 24px; font-family: 'Prompt', sans-serif;" >แก้ไขข้อมูลสำหรับผู้ดูแล</b-nav-text> </router-link>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <router-view />
  </div>
</template>


<script>
export default {
  
}
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