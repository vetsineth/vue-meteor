<template>
  <div>
    <el-row :gutter="5">
      <el-col :span="24">
        <el-form
          label-width="100px"
          v-loading="loading"
          :model="form"
          :rules="rules"
          ref="form"
        >
          <h2>NewCustomer</h2>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item
                label="Type"
                prop="type"
              >
                <el-select
                  v-model="form.type"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in typeOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                    </el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item
                      label="No"
                      prop="id"
                    >
                      <el-input v-model="form.id"></el-input>
                      </el-form-item>
                      <el-form-item
                        label="Name"
                        prop="name"
                      >
                        <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item
                          label="Age"
                          prop="age"
                        >
                          <el-input v-model="form.age"></el-input>
                          </el-form-item>
                          <el-form-item
                            label="Gender"
                            prop="gender"
                          >
                            <el-select
                              v-model="form.gender"
                              style="width: 100%"
                            >
                              <el-option
                                v-for="item in sexOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                                </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item
                                  label="DateOfBirth"
                                  prop="dob"
                                >
                                  <el-date-picker v-model="form.dob"></el-date-picker>
                                  </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item
                label="Address"
                prop="address"
              >
                <el-select
                  v-model="form.address"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in addOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                    </el-option>
                    </el-select>
                    </el-form-item>

                    <el-form-item
                      label="Phone"
                      prop="tel"
                    >
                      <el-input v-model="form.tel"></el-input>
                      </el-form-item>
                      <el-form-item
                        label="Status"
                        prop="status"
                      >
                        <el-select
                          v-model="form.status"
                          style="width: 100%"
                        >
                          <el-option
                            v-for="item in statOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                            </el-option>
                            </el-select>
                            </el-form-item>
                            <el-form-item
                              label="Memo"
                              prop="memo"
                            >
                              <el-input
                                type="textarea"
                                v-model="form.memo"
                              ></el-input>
                                </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="24">
              <el-tabs>
                <el-tab-pane label="Account">
                  <el-row :gutter="5">
                    <el-col :span="12">
                      <el-form-item
                        label="Currency*"
                        prop="currency"
                      >
                        <el-select
                          v-model="form.currency"
                          style="width:100%"
                        >
                          <el-option
                            v-for="item in currencyOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                            </el-option>
                            </el-select>
                            </el-form-item>
                            <el-form-item
                              label="AccReceive*"
                              prop="accountReceive"
                            >
                              <el-select
                                v-model="form.accountReceive"
                                style="width: 100%"
                              >
                                <el-option
                                  v-for="item in accountReceiveOpt"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                  </el-option>
                                  </el-select>
                                  </el-form-item>
                                  <el-form-item
                                    label="ReAccount*"
                                    prop="revenuAccount"
                                  >
                                    <el-select
                                      v-model="form.revenuAccount"
                                      style="width: 100%"
                                    >
                                      <el-option
                                        v-for="item in revenuAccountOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                      >
                                        </el-option>
                                        </el-select>
                                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="DeAccount*"
                        prop="depositAccount"
                      >
                        <el-select
                          v-model="form.depositAccount"
                          style="width: 100%"
                        >
                          <el-option
                            v-for="item in depositAccountOpt"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                            </el-option>
                            </el-select>
                            </el-form-item>
                            <el-form-item
                              label="TDiscount*"
                              prop="tradeDiscount"
                            >
                              <el-select
                                v-model="form.tradeDiscount"
                                style="width: 100%"
                              >
                                <el-option
                                  v-for="item in tradeDiscountOpt"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                  </el-option>
                                  </el-select>
                                  </el-form-item>
                                  <el-form-item
                                    label="SDiscount*"
                                    prop="settlementDiscount"
                                  >
                                    <el-select
                                      v-model="form.settlementDiscount"
                                      style="width: 100%"
                                    >
                                      <el-option
                                        v-for="item in settlementDiscountOpt"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                      >
                                        </el-option>
                                        </el-select>
                                        </el-form-item>
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="12"
              :offset="15"
            >
              <br><br>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="handleSave"
                >Save</el-button>
                  <el-button @click="handleCancel">Cancel</el-button>
              </el-form-item>
      </el-col>
      </el-row>
      </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import moment from 'moment';
import { findCustomers, insertCustomer } from "../../api/customers/methods.js";
export default {
  name: "CustomerNew",
  // components:{
  //     myComponent:CusComponent,
  //     },
  data() {
    return {
      loading: false,
      customerOpt: [],
      form: {
        type: "",
        id: "",
        name: "",
        age: "",
        gender: "",
        dob: "",
        tel: "",
        status: "",
        address: "",
        memo: "",
        currency: "",
        accountReceive: "",
        revenuAccount: "",
        depositAccount: "",
        tradeDiscount: "",
        settlementDiscount: ""
      },
      typeOpt: [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" }
      ],
      statOpt: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Void", value: "Void" }
      ],
      addOpt: [
        { label: "Battambang", value: "Battambang" },
        { label: "Phnom Penh", value: "Phnom Penh" },
        { label: "Pursat", value: "Pursat" },
        { label: "KomPongCham", value: "KomPongCham" },
        { label: "Kandal", value: "Kandal" },
        { label: "SiemRaip", value: "SiemRaip" }
      ],
      sexOpt: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" }
      ],
      currencyOpt: [
        { label: "USA", value: "USA" },
        { label: "Khmer", value: "Khmer" },
        { label: "Thai", value: "Thai" }
      ],
      revenuAccountOpt: [
        { label: "Cash 1", value: "Cash1" },
        { label: "Cash 2", value: "Cash2" },
        { label: "Cash 3", value: "Cash3" }
      ],
      accountReceiveOpt: [
        { label: "currency", value: "currency" },
        { label: "revenuAccount", value: "revenuAccount" },
        { label: "accountReceive", value: "accountReceive" },
        { label: "depositAccount", value: "depositAccount" }
      ],
      depositAccountOpt: [
        { label: "Cash 1", value: "Cash1" },
        { label: "Cash 2", value: "Cash2" },
        { label: "Cash 3", value: "Cash3" }
      ],
      tradeDiscountOpt: [
        { label: "0%", value: "0%" },
        { label: "5%", value: "5%" },
        { label: "10%", value: "10%" },
        { label: "15%", value: "15%" },
        { label: "20%", value: "20%" }
      ],
      settlementDiscountOpt: [
        { label: "0%", value: "0%" },
        { label: "5%", value: "5%" },
        { label: "10%", value: "10%" },
        { label: "15%", value: "15%" },
        { label: "20%", value: "20%" }
      ],
      rules: {
        type: [{ required: true, message: "Type is required" }],
        id: [{ required: true, message: "id is required" }],
        name: [{ required: true, message: "name is required" }],
        age: [{ required: true, message: "Age is required" }],
        gender: [{ required: true, message: "sex is required" }],
        dob: [{ required: true, message: "dob is required" }],
        tel: [{ required: true, message: "tel is required" }],
        address: [{ required: true, message: "address is required" }],
        status: [{ required: true, message: "Status is required" }],
        memo: [{ required: true, message: "Descripion is reqiured" }],
        currency: [
          {
            required: true,
            message: "Currency is required"
          }
        ],
        accountReceive: [
          {
            required: true,
            message: "accountReceive is required"
          }
        ],
        revenuAccount: [
          { required: true, message: "revenuAccount is required" }
        ],
        depositAccount: [
          {
            required: true,
            message: "depositAccount is required"
          }
        ],
        tradeDiscount: [
          {
            required: true,
            message: "tradeDiscount is required"
          }
        ],
        settlementDiscount: [
          {
            required: true,
            message: "settlementDiscount is required"
          }
        ]
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      findCustomers
        .callPromise({}, { sort: { code: 1 } })
        .then(result => {
          this.customerOpt = result;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.reason);
        });
    },
    handleSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.loading = true;

          insertCustomer
            .callPromise(this.form)
            .then(result => {
              if (result) {
                this.loading = false;
                this.$notify({
                  type: "Success",
                  position: "bottom-right",
                  title: "Success",
                  message: "Success"
                });
                this.handleReset();
                //console.log(result)
              }
            })
            .catch(err => {
              console.log(error.reason);
            });
        } else {
          return false;
        }
      });
    },
    handleReset() {
      this.$refs["form"].resetFields();
    },
    handleCancel() {
      this.$router.push({ name: "customer" });
    }
  }
};
</script>



