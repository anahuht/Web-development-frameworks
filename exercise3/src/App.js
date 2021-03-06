import React from 'react';
import data from './data.json';
import SearchView from './components/SearchView'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: ""
    }
  }

onSearchFieldChange = (event) => {
  console.log(event.target.value);
  this.setState({productSearchString: event.target.value});
}

render() {

  return (
    <>
    <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
  <SearchView 
  items={this.state.items.filter((item) => item.name.includes(this.state.productSearchString))} />
  </>
  );
}
}
export default App;
