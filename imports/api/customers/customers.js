import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
const Customer = new Mongo.Collection("customer");

Customer.schema = new SimpleSchema({
  type: {
    type: String,
    max: 200
  },
  id: {
    type: String,
    optional: true
  },
  name: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  },
  age: {
    type: String,
    optional: true
  },
  dob: {
    type: String,
    optional: true
  },
  address: {
    type: String,
    optional: true
  },
  tel: {
    type: String,
    optional: true
  },
  status: {
    type: String,
    optional: true
  },
  memo: {
    type: String,
    optional: true
  },
  currency: {
    type: String,
    optional: true
  },
  accountReceive: {
    type: String,
    optional: true
  },
  revenuAccount: {
    type: String,
    optional: true
  },
  depositAccount: {
    type: String,
    optional: true
  },
  tradeDiscount: {
    type: String,
    optional: true
  },
  settlementDiscount: {
    type: String,
    optional: true
  }
});
Customer.attachSchema(Customer.schema);

export default Customer;
