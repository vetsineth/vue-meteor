
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import SimpleSchema from 'simpl-schema';
import rateLimit from '../../lib/rate-limits.js'

import Customer from '../customers/customers.js'

export const findCustomers=new ValidatedMethod({
  name:'findCustomers',
  mixins:[CallPromiseMixin],
  validate:null,
  run(selector,options){
    if(Meteor.isServer){ 
      Meteor._sleepForMs(200);
      selector=selector || {};
      options=options || {};
      let data= Customer.find(selector,options).fetch();
      _.forEach(data,(o)=>{
        o.tradeDiscount=o.tradeDiscount/100;
        o.settlementDiscount=o.settlementDiscount/100;
      })
      return data;
    }
  }
});

// Find One

export const findOneCustomer=new ValidatedMethod({
  name:'findOneCustomer',
  mixins:[CallPromiseMixin],
  validate:null,
  run(selector,options){
    if(Meteor.isServer){
      Meteor._sleepForMs(200);
      selector=selector || {};
      options=options || {};

      return Customer.find(selector,options);
    }
  }
});

//Insert
export const insertCustomer = new ValidatedMethod({
name: 'insertCustomer',
mixins: [CallPromiseMixin],
// validate: Customers.schema.validator(),
validate: null,
run(doc) {
  if (!this.isSimulation) {
    return Customer.insert(doc)
  }
}
});

// Update
export const updateCustomer = new ValidatedMethod({
name: 'updateCustomer',
mixins: [CallPromiseMixin],
// validate: Customers.schema.validator(),
validate: null,
run(doc) {
  if (!this.isSimulation) {
    return Customer.update({_id: doc._id}, {$set: doc})
  }
}
});

//remove 

export const removeCustomer = new ValidatedMethod({
name:'removeCustomer',
mixins:[CallPromiseMixin],
validate: new SimpleSchema({
  _id:{type:String},
}).validator(),
run(selector){
  if(Meteor.isServer){
    return Customer.remove(selector);
  }
}
});

rateLimit({
methods: [
  findCustomers,
  findOneCustomer,
  insertCustomer,
  updateCustomer,
  removeCustomer
]
});
