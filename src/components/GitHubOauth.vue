<template>
  <div class="hero is-primary">
    <div class="hero-body">
      <div class="col-lg-12 align-self-center">
        <h2 style="color: #fff">Loading Github UserInfo </h2>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from "querystring";

import { getToken } from "../api/manage.js";
import Util from "../utils/custom";
export default {
  name: "GithubOauth",
  data() {
    return {
      code: this.$route.query.code,
    };
  },
  mounted: function () {
    this.getToken();
  },
  methods: {
    async getToken() {
      let that = this; 
      let parameter = { code: that.code }; 
      let resultJson = await getToken(parameter);
      if (resultJson.error == 500) {
        Util.toastMsgError("Tip", resultJson.err_msg, "toast-top-center");
        return;
      } 
      let jsonData = querystring.parse(resultJson.data); 
      if (jsonData.access_token) { 
        let access_token = jsonData.access_token;
        window.localStorage.setItem("github_token", access_token); 
      } else { 
        if(jsonData.error){ 
          Util.toastMsgError( "Tip",  jsonData.error_description,  "toast-top-center" ); 
        }else{ 
           Util.toastMsgError( "Tip",  "net error",  "toast-top-center" ); 
        }
       
      }
      that.$router.push("/");

    },
  },
};
</script>

<style scoped></style>
