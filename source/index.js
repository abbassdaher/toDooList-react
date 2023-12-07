// Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "stateName",
      title: "stateTitle",
    };
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        <Header StateName ={this.state.name} />
        <Items name="gym" />
        <AddItem />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    console.log(this);
    return <header>{this.props.StateName}</header>;
  }
}
class Items extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
class AddItem extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <button type="submit">AddItem</button>
      </form>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
