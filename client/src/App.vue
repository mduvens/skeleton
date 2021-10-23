<template>
  <div id="main">
    <MainHeader id="main_header"></MainHeader>
    <MainContent id="main_content"></MainContent>
    <MainFooter id="main_footer"></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
import MainContent from '@/components/MainContent'

export default {
  components:{
    MainHeader,
    MainFooter,
    MainContent
  }
}
</script>

<style>
html,body{
  margin: 0;
}
#main{
  display: grid;
  height: 100vh;
  grid-template-rows: 10% 80% 10%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
