import React from "react";

class ShoeForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            manufacturer: '',
            model_name: '',
            color: '',
            picture_url: '',
            bins: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    async componentDidMount() {
        const url = 'http://localhost:8100/api/bins/'
        const res = await fetch(url)

        if (res.ok) {
            const data = await res.json()
            this.setState({bins: data.bins})
        }
        
    }

    handleChange(event) {
        const value = event.target.value
        const key  = event.target.name
        const changeDict = {}
        changeDict[key] = value
        this.setState(changeDict)
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.bins
        console.log(data)
        
        const shoeUrl = ' http://localhost:8080/api/shoes/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const res = await fetch(shoeUrl, fetchConfig)
        if (res.ok) {
            const newShoe = await res.json()
            console.log(newShoe)

            const cleared = {
                manufacturer: '',
                model_name: '',
                color: '',
                picture_url: '',
                bin: '',
            }
            this.setState(cleared)
        }
    }
    render() {
        return(
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new shoe</h1>
                        <form onSubmit={this.handleSubmit} id="create-shoe-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange}
                                    placeholder="Manufacturer" required type="text" name='manufacturer' 
                                    id="manufacturer" className="form-control"/>
                                <label htmlFor="manufacturer">Manufacturer</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} 
                                    placeholder="Model Name" required type="text" name='model_name' 
                                    id="model_name" className="form-control" />
                                <label htmlFor="model_name">Model Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange}
                                    placeholder="Color" required type="text" name='color' 
                                    id="color" className="form-control" />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange}
                                    placeholder="Picture url" required type="text" name='picture_url' 
                                    id="picture_url" className="form-control" />
                                <label htmlFor="picture_url">Picture url</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} value = {this.state.bin}
                                    required name='bin' id="bin" className="form-select">
                                    <option value="">Choose a bin</option>
                                    {this.state.bins.map(bin => {
                                        return (
                                            <option key={bin.href} value={bin.href}>
                                                {bin.closet_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default ShoeForm;