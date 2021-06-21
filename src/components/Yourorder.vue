<template>
  
  <div class="backdrop">

  {{index}}
  </div>

</template>

<script>
export default {
    props:['index','item','quan','unit']


}
</script>

<style>
.backdrop{
top:0;
position:fixed;
 
width:100%;
height:100%;
align-content: center;
}

</style>