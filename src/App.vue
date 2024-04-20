<script>
import HeaderContent from "@/public/components/header.vue";
import CountryContent from "@/countries/components/country.component.vue";
import FooterContent from "@/public/components/footer.vue";
import {CountriesApiService} from "@/countries/services/countries-api.service.js";
import {Country} from "@/countries/models/country.model.js";

export default {
  name: 'App',
  components: {HeaderContent, CountryContent, FooterContent},
  data() {
    return {
      countryDetails: {},
      errors: [],
      countriesApi: new CountriesApiService()
    }
  },
  created() {
      this.getCountryDetails('Costa Rica')
  },
  methods: {
    buildCountryDetails(details) {
      return new Country (
          details.name.common,
          details.name.official,
          details.currencies,
          details.capital,
          details.region,
          details.subregion,
          details.languages,
          details.population,
          details.flags.png,
          details.coatOfArms.png,
      )
    },

    getCountryDetails(countryName) {
      this.countriesApi.getCountryByName(countryName)
          .then(country => {
            let details = country.data[0];
            this.countryDetails = this.buildCountryDetails(details);
            console.log(this.countryDetails)
          })
          .catch(event => {
            this.errors.push(event)
          })
    }
  }

}

</script>

<template>
  <header-content></header-content>
  <country-content :countryDetails='countryDetails' ></country-content>
  <footer-content></footer-content>
</template>

<style scoped>
</style>
