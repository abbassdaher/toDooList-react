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
      e.preventDefault();
      let products = [...this.state.products, this.state.item];
      this.setState({
        products,
      });
    };
    this.listedItem = () => {
      this.state.products.map((item) => {
        return <div>{item}</div>;
      });
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem
          changeItemValue={this.changeItemValue}
          onSubmitForm={this.onSubmitForm}
        />
        {this.listedItem}
        <Items products={this.state.products} />
        {console.log(this.state.products)}
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return <header>ToDoo-List</header>;
  }
}
class Items extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <div>{product}</div>
        ))}
      </div>
    );
  }
}
class AddItem extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <input type="text" onChange={this.props.changeItemValue} />
        <button type="submit">AddItem</button>
      </form>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
