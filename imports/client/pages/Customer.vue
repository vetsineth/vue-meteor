<template>
  <div>
    <router-view></router-view>

    <el-button
      type="primary"
      @click="handleNew"
    >Add new</el-button>
      <data-tables
        :data="customerOpt"
        :action-col-def="actionColDef"
        :search-def="searchDef"
      >
        <el-table-column
          v-for="title in titles"
          :prop="title.prop"
          :label="title.label"
          :key="title.label"
          :fixed="title.fixed"
          :width="title.width"
          :formatter="title.dateFormatter || title.disFormate"
        >
          </el-table-column>
          </data-tables>
  </div>
</template>
<script>
import moment from "moment";
import { findCustomers, removeCustomer } from "../../api/customers/methods.js";
export default {
  name: "Customer",
  data() {
    return {
      loading: false,
      customerOpt: [],
      searchDef: {
        show: false
      },
      titles: [
        {
          label: "Type",
          prop: "type",
          fixed: "left"
        },
        {
          label: "No",
          prop: "id"
        },
        {
          label: "Name",
          prop: "name"
        },
        {
          label: "Gender",
          prop: "gender"
        },
        {
          label: "Age",
          prop: "age"
        },
        {
          label: "DOB",
          prop: "dob",
          dateFormatter: (row, column) => {
            var date = row[column.property];
            if (date == undefined) {
              return "";
            }
            return moment(date).format("LL");
          },
          width: 150
        },
        {
          label: "Address",
          prop: "address",
          width: 120
        },
        {
          label: "Phone",
          prop: "tel",
          width: 120
        },
        {
          label: "Status",
          prop: "status"
        },
        {
          label: "Memo",
          prop: "memo",
          width: 120
        },
        {
          label: "Currency",
          prop: "currency"
        },
        {
          label: "AReceive",
          prop: "accountReceive",
          width: 120
        },
        {
          label: "RAccount",
          prop: "revenuAccount"
        },
        {
          label: "DAccount",
          prop: "depositAccount"
        },
        {
          label: "TDiscount",
          prop: "tradeDiscount",
          disFormate: (row, column) => {
            var dis = row[column.property];
            if (dis == undefined) {
              return "";
            }
            return numeral(dis).format("%0");
          }
        },
        {
          label: "SDiscount",
          prop: "settlementDiscount",
          disFormate: (row, column) => {
            var dis = row[column.property];
            if (dis == undefined) {
              return "";
            }
            return numeral(dis).format("%0");
          }
        }
      ],
      actionColDef: {
        label: "Actions",
        width: 150,
        fixed: "right",
        tableColProps: {
          align: "center"
        },
        def: [
          {
            handler: row => {
              this.edit(row);
            },
            buttonProps: {
              type: "text"
            },
            name: "Edit"
          },
          {
            icon: "message",
            type: "text",
            handler: row => {
              this.delete(row);
            },
            name: "Delete"
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
        .callPromise()
        .then(result => {
          console.log(result);

          this.customerOpt = result;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.reason);
        });
    },
    handleNew() {
      this.$router.push({ name: "customerNew" });
    },
    handleCommand(command) {
      this[command.action](command.row);
    },
    edit(row) {
      this.$router.push({ name: "customerEdit", params: { _id: row._id } });
    },
    delete(row) {
      this.$confirm("This will permanently delete. Continue?", "Warning", {
        type: "warning"
      })
        .then(() => {
          removeCustomer
            .callPromise({ _id: row._id })
            .then(result => {
              this.$notify({
                type: "success",
                position: "bottom-right",
                title: "Success",
                message: "Your transaction is success"
              });

              this.getData();
            })
            .catch(error => {
              console.log(error.reason);
            });
        })
        .catch(() => {
          this.$notify({
            type: "warning",
            position: "bottom-right",
            title: "Warning",
            message: "Your transaction is canceled"
          });
        });
    }
  }
};
</script>

