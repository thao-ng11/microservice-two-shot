import React from "react";

class HatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabric: "",
      style_name: "",
      color: "",
      picture_url: "",
      locations: [],
    };
    this.handleFabricChange = this.handleFabricChange.bind(this);
    this.handleStyleNameChange = this.handleStyleNameChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handlePictureLinkChange = this.handlePictureLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.locations;

    const locationUrl = "http://localhost:8090/api/hats/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();
      console.log(newLocation);

      const cleared = {
        fabric: "",
        style_name: "",
        color: "",
        picture_url: "",
        locations: [],
      };
      this.setState(cleared);
    }
  }

  handleFabricChange(event) {
    const value = event.target.value;
    this.setState({ fabric: value });
  }

  handleColorChange(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleStyleNameChange(event) {
    const value = event.target.value;
    this.setState({ style_name: value });
  }

  handleLocationChange(event) {
    const value = event.target.value;
    this.setState({ location: value });
  }

  handlePictureLinkChange(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/locations/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ locations: data.locations });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new hat</h1>
            <form onSubmit={this.handleSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.fabric}
                  onChange={this.handleFabricChange}
                  placeholder="Fabric"
                  required
                  type="text"
                  name="fabric"
                  id="fabric"
                  className="form-control"
                />
                <label htmlFor="fabric">Fabric</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.color}
                  onChange={this.handleColorChange}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.style_name}
                  onChange={this.handleStyleNameChange}
                  placeholder="Style name"
                  required
                  type="text"
                  name="style_name"
                  id="style_name"
                  className="form-control"
                />
                <label htmlFor="style_name">Style name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.picture_url}
                  onChange={this.handlePictureLinkChange}
                  placeholder="Picture URL"
                  required
                  type="text"
                  name="picture_url"
                  id="picture_url"
                  className="form-control"
                />
                <label htmlFor="picture_url">Picture url</label>
              </div>
              <div className="mb-3">
                <select
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                  required
                  name="location"
                  id="location"
                  className="form-select"
                >
                  <option value="">Choose a location</option>
                  {this.state.locations.map((location) => {
                    return (
                      <option key={location.href} value={location.href}>
                        {location.closet_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HatForm;
