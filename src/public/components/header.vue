<script>
export default {
name: 'header-content',
data(){
  return{
    languages: ['en','es'],
    language : 'en'
     }
  }
}
</script>

<template>
  <header>
    <pv-toolbar class='sticky bg-primary'>
      <template #start>
        {{ $t('header', {country: 'Peru'})}}
      </template>
      <template #end>
        <pv-select-button v-model="$i18n.locale" :options="languages" class="bg-primary uppercase"></pv-select-button>
      </template>
    </pv-toolbar>
  </header>
</template>
