<script>
import {Country} from "@/countries/models/country.model.js";

export default {
  name: 'country-content',
  props: {
    countryDetails: {
      type: Country,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class='p-2'>
    <template #header>
      <div class='flex justify-content-center h-5rem gap-5'>
        <img :src="countryDetails.flag" alt="Flag of {{countryDetails.name}}">
        <img :src="countryDetails.coatOfArms" alt="Coat of Arms of {{countryDetails.name}}">
      </div>
    </template>
    <template #title>
      <div class='flex justify-content-center'>
        <p>{{countryDetails.name}} - {{countryDetails.officialName}}</p>
      </div>
    </template>
    <template #content>
      <div class='flex flex-column justify-content-center align-items-center'>
        <p v-if="countryDetails && countryDetails.capital">
          Capital: {{countryDetails.capital.toString()}}
        </p>
        <p v-if="countryDetails && countryDetails.currencies ">
          Currency: {{ Object.values(countryDetails.currencies)[0]?.name }}
        </p>
        <p v-if="countryDetails && countryDetails.region">
          Region: {{countryDetails.region}}
        </p>
        <p v-if="countryDetails && countryDetails.subregion">
          Subregion: {{countryDetails.subregion}}
        </p>
        <p v-if="countryDetails && countryDetails.languages ">
          Languages: {{ Object.values(countryDetails.languages).join(', ') }}
        </p>
        <p v-if="countryDetails && countryDetails.population">
          Population: {{countryDetails.population}}
        </p>

      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>