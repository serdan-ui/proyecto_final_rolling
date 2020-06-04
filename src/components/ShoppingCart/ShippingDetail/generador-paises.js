import React from "react";
import { Form } from "react-bootstrap";

class PaisesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paises: [],
      isFetch: true,
    };
  }

  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";

    fetch(url)
      .then((response) => response.json())
      .then((paisesJson) =>
        this.setState({ paises: paisesJson, isFetch: false })
      )
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.isFetch) {
      return "Loading...";
    }

    const paisNombre = this.state.paises[0].name;

    return (this.state.paises.map((item) => <option>{item.name}</option>))
    
  }
}

export default PaisesContainer;
