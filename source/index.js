// Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "stateName",
      title: "stateTitle",
    };
    this.changeTitle = () => {
      this.setState({
        title: "new stateTitle",
      });
    };
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        <Header StateName={this.state.title} />
        <button onClick={this.changeTitle}>change</button>
        {/* <Items name="gym" />*/}
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
  constructor() {
    super();
    this.state = ({
      name: "",
    });
    this.change = (e)=>{
      console.log(e.target.value);
      this.setState({
      name : e.target.value
    })
    }
    
  }

  render() {
    console.log(this);
    return (
      <form>
        
        <input type="text" onChange = {this.change}/>
        <button type="submit">AddItem</button>
        <div>{this.state.name}</div>
      </form>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
