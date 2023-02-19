<template>
  <Header />
  <!-- Caruosel -->
  <div
    class="container-fluid bg-secondary booking wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-6 py-5"></div>
        <div class="col-lg-6">
          <div
            class="bg-dark h-100 d-flex flex-column justify-content-center text-center p-5"
          >
            <h1 class="text-white mb-4">Book For A Service</h1>
            <form>
              <div class="row g-3">
                <div class="col-12 col-sm-12">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Select Your Car"
                    style="height: 55px"
                  />
                </div>
                <div class="col-md-12">
                  <router-link to="/service">
                    <button
                      class="btn btn-primary w-100 py-3 float-end"
                      type="submit"
                    >
                      View Services
                    </button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card">
                <div class="card-body">
                    <div class="col-6">
                    <img src="../components/images/team-1.jpg" class="img-card" alt="">
                    </div>
                    <div class="col-6">
                        <h4 class="serviceName">Regular Service</h4>
                        <div class="col-12">
                             <h5 class="price-container">
                                <span><i class="fa fa-inr" aria-hidden="true"></i> 13,991</span>
                                <span class="strike-price"><i class="fa fa-inr" aria-hidden="true"></i>
                                    18,900</span>
                                <span class="badge badge-success">12% off</span>
                        </h5>
                        </div>
                       
                    </div>
                </div>
               
                </div>
            </div>
               <div class="col-12 col-md-4">
                <div class="card">
                <div class="card-header">Header</div>
                <div class="card-body">Body</div>
                <div class="card-footer">Footer</div>
                </div>
            </div>

               <div class="col-12 col-md-4">
                <div class="card">
                <div class="card-header">Header</div>
                <div class="card-body">Body</div>
                <div class="card-footer">Footer</div>
                </div>
            </div>
        </div>
    </div>

  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: { Header, Footer },
  name: "Service2Component",
};
</script>

<style scoped>
.card{
    width: 90%;
}
.img-card{
    width: 200%;
}
.serviceName{
    margin-top: 15px;
}
.strike-price{
    text-decoration: line-through;
    color:gray;
    font-size: 16px;
    margin-left: 10px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .card{
        width: auto;
        height:auto;
        margin-top: 15px;
}

.img-card{
    width: 200%;
}
.serviceName{
    margin-top: 15px;
}

}
</style>
