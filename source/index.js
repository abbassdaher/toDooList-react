// Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      item: "",
    };
    this.changeItemValue = (e) => {
      this.setState({
        item: e.target.value,
      });
    };
    this.onSubmitForm = (e) => {
      e.preventDefault()
      let products = [...this.state.products, this.state.item];
      this.setState({
        products
      })
      
    };
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        {this.state.item}
        <Header />
        <AddItem changeItemValue={this.changeItemValue} onSubmitForm = {this.onSubmitForm}/>
        {console.log(this.state.products)}
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    console.log(this);
    return <header>ToDoo-List</header>;
  }
}
class Items extends React.Component {
  render() {
    return <div></div>;
  }
}
class AddItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form onSubmit = {this.props.onSubmitForm}>
        <input type="text" onChange={this.props.changeItemValue} />
        <button type="submit">AddItem</button>
      </form>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
