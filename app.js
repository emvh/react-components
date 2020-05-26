// TODO
var Cheese = () => (
  <div>Cheese</div>
);

var ChickenNuggets = () => (
  <div>Chicken Nuggets</div>
);

var GroceryList = () => (
  <div>
    <h3> My Grocery List</h3>
      <Cheese />
      <ChickenNuggets />
  </div>
);
 ReactDOM.render(<GroceryList />, document.getElementById('app'));



