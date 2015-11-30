Sales = new Meteor.Collection( 'sales' );

Sales.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Sales.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let SalesSchema = new SimpleSchema({
  "saleId": {
    type: String,
    label: "ID number for the sale."
  },
  "date": {
    type: String,
    label: "Date"
  },
  "product": {
    type: String,
    label: "Product"
  },
  "price": {
    type: String,
    label: "Price"
  },
  "paymentType": {
    type: String,
    label: "Payment Type"
  },
  "name": {
    type: String,
    label: "Name"
  },
  "city": {
    type: String,
    label: "City"
  },
  "state": {
    type: String,
    label: "State"
  },
  "country": {
    type: String,
    label: "Country"
  },
  "created": {
    type: String,
    label: "Created"
  },
  "lastLogin": {
    type: String,
    label: "Last Login"
  },
  "latitude": {
    type: String,
    label: "Latitude"
  },
  "longitude": {
    type: String,
    label: "Longitude"
  }
});

Sales.attachSchema( SalesSchema );
