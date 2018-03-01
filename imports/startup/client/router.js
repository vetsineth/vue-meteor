import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../../client/pages/Home.vue";
import Customer from "../../client/pages/Customer.vue";
import CustomerNew from "../../client/pages/CustomerNew.vue";
import CustomerEdit from "../../client/pages/CustomerEdit.vue";
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/customer",
      name: "customer",
      component: Customer
    },
    {
      path: "/newCustomer",
      name: "customerNew",
      component: CustomerNew
    },
    {
      path: ":_id/customerEdit",
      name: "customerEdit",
      component: CustomerEdit
    }
  ]
});
export default router;
