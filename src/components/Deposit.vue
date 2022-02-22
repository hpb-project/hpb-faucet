<template>
  <section class="pricing-area text-center pd-top-10 pd-bottom-10">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="section-title text-center">
            <h2>Last Receivers</h2>
            <p>
              <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore -->
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
          <div class="single-price-wrap">
            <ul class="pricing-list"> 
              <li v-for="(item,index) in  accountList" :key="index">
                <a  target="_blank" :href="'https://hscan.org/address/'+item">{{item}}</a>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 
export default {
  name: "Deposit",
   props: ['accountList'],
   data() {
    return { 
    };
  },
 
};
</script>

<style></style>
