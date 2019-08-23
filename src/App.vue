<template>
  <v-app>

    <!--
      References:
      https://youtu.be/ZSexhaiMKJE
      https://youtu.be/78tNYZUS-ps
      DesignCourse on youtube: https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow
      https://youtu.be/GiIQce7Rx4Y
    -->
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
