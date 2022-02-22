<template>
  <div>
      <NavHeaderVue />
      <SearchPage @getLastAccounts="getLastAccounts"/>
      <DepositVue :accountList="accountList" />
      <OtherVue />
      <FooterVue />
  </div>
</template>

<script>

import DepositVue from '../components/Deposit.vue';
import FooterVue from '../components/Footer.vue';
import NavHeaderVue from '../components/NavHeader.vue';
import OtherVue from '../components/Other.vue';
import SearchPage  from '../components/SearchPage.vue';  
import { getLastAccounts } from "../api/manage.js";
export default {
  name: "MainLayout",
  components: {
    NavHeaderVue,
    SearchPage,
    DepositVue,
    OtherVue,
    FooterVue
  },
  data() {
    return {
      accountList:[]
    };
  },
   mounted: function () {    
    this.getLastAccounts()
  },
  methods: {
      async getLastAccounts() {
         let resultJson = await getLastAccounts();
         if(resultJson.error =='200'){
            this.accountList = resultJson.data
         }
      }
    }
};
</script>

<style scoped></style>
