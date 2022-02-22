<template>
  <div class="banner-area banner-area-2">
    <div class="container">
      <div class="banner-area-inner">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="form-area">
              <h3>Enter Your MainNet Account Address</h3>
              <form>
                <input
                  v-model="toAddress"
                  type="text"
                  placeholder="Please Enter Your MainNet Account Address"
                  class="form-control"
                />
                <button type="button" class="btn" v-on:click="SendAddress">
                  <img src="assets/img/icon/submit.png" alt="img" />
                </button>
                <div style="margin-top:10px;font-weight:600;">
                  Please identify your request with <a href="" @click.prevent="loginGithub" >GitHub</a> OAuth authorizing
                </div>
              </form>
              <div>
                <button
                  id="hiddenButton"
                  type="button"
                  class="search btn"
                  style="display: none"
                >
                  登录github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Util from "../utils/custom";
import { sendTransfer } from "../api/manage.js";

export default {
  name: "SearchPage",
  data() {
    return {
      toAddress: "",
    };
  },
  mounted:function(){
      const address = window.localStorage.getItem("account_address") || ""
      this.toAddress = address
  },
  methods: {
    loginGithub(){
       $("#hiddenButton").trigger("click");
       return false;
    },
    async SendAddress() {

      if (this.toAddress == "") {
        Util.toastMsgError(
          "Tip",
          "please enter your account address ",
          "toast-top-center"
        );
        return;
      }

      window.localStorage.setItem("account_address", this.toAddress);

      let token = window.localStorage.getItem("github_token");
      if (!token) {
        //没有token 进行github登录
        $("#hiddenButton").trigger("click");
        return;
      } 
      try {
        let parameter = { token: token, to: this.toAddress };
        let resultJson = await sendTransfer(parameter); 
        if (resultJson.error == "200") {
            window.localStorage.setItem("account_address", "");
            Util.toastMsgSuccess("Tip", "Receive Success", "toast-top-center");
            //调用父组件的函数
            this.$emit("getLastAccounts");
        } else {
          window.localStorage.setItem("github_token", "");
          Util.toastMsgError( "Tip", resultJson.data,      "toast-top-center" );
        }
        this.toAddress = "";
      } catch (e) {
        console.log(e);
        Util.toastMsgError( "Tip", resultJson.data,"toast-top-center");
      } finally {
        // Util.toastClear();
      }
    },
  },
};
</script>

<style scoped></style>
