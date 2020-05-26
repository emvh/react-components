// TODO
// var Cheese = () => (
//   <div>Cheese</div>
// );

// var ChickenNuggets = () => (
//   <div>Chicken Nuggets</div>
// );

var GroceryListItem = (props) => {
  return (
    <li>{props.item}</li>
    );
  }

var GroceryList = (props) => {
  return (
  <div>
    <h3> My Grocery List</h3>
    <ul>
        <GroceryListItem item={props.item[0]} />
        <GroceryListItem item={props.item[1]} />
    </ul>
  </div>
  )
  };

var groceryItems = ['Cheese', 'Nuggets'];

 ReactDOM.render(<GroceryList item={groceryItems} />, document.getElementById('app'));



