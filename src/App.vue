<template>
  <v-app>
    
    <v-main style="background: #dfa16f ">
        <!-- <Navbar/> -->
        <TodoApp/>
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    TodoApp,
    Navbar
  }
};
</script>
<style >
    :root{
        --primary: #DFBB9D;
        --secondary: #dfa16f;
    }
    body{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
</style>
