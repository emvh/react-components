// TODO
// var Cheese = () => (
//   <div>Cheese</div>
// );

// var ChickenNuggets = () => (
//   <div>Chicken Nuggets</div>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
    <li style={style} onMouseEnter={this.onListItemHover.bind(this)}> {this.props.items}</li>
    );
  }

}

// var GroceryListItem = (props) => {
//   return (
//     <li>{props.items}</li>
//     );
//   }

var GroceryList = (props) => (
  <div>
    <h3>My Grocery List</h3>
    <ul>
      {props.items.map( value =>
        <GroceryListItem items={value}/>
      )}
    </ul>
  </div>
);

var groceryItems = ['Cheese', 'Nuggets'];

var App = () => (
  <div>
    <GroceryList items={groceryItems} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));



