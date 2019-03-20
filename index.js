// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood{
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;

     store.neighborhoods.push(this);
  }
}

deliveries(){
  return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
}
customers(){
  return
}

class Neighborhood{
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;

     store.neighborhoods.push(this)
  }
  class Neighborhood{
    constructor(name){
      this.id = ++neighborhoodId;
      this.name = name;

       store.neighborhoods.push(this)
    }
