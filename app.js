// TODO
// var Cheese = () => (
//   <div>Cheese</div>
// );

// var ChickenNuggets = () => (
//   <div>Chicken Nuggets</div>
// );

var GroceryListItem = (props) => {
  return (
    <li>{props.items}</li>
    );
  }

var GroceryList = (props) => {
  return (
  <div>
    <h3> My Grocery List</h3>
    <ul>
      {props.items.map( value => <GroceryListItem items={value}/>
      )}
    </ul>
  </div>
  )
  };

var groceryItems = ['Cheese', 'Nuggets'];

 ReactDOM.render(<GroceryList items={groceryItems} />, document.getElementById('app'));



