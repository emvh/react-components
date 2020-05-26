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
      {props.item.map(item => <GroceryListItem item={item}/>
      )}
    </ul>
  </div>
  )
  };

var groceryItems = ['Cheese', 'Nuggets'];

 ReactDOM.render(<GroceryList item={groceryItems} />, document.getElementById('app'));



