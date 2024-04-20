<script>
  export default {
  name: 'footer-content'
  }
</script>


<template>
  <footer class='bg-primary flex flex-column align-items-center justify-content-center'>
    <p>{{$t('copyright', {brand: '2023 RESTCountries, inc'})}}</p>
    <p>{{$t('develop', {developer: 'Omar Morales U202212383'})}}</p>
  </footer>
</template>

