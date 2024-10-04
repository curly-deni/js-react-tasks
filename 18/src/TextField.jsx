import React from 'react';

class TextField extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const { onAdd } = this.props;
        onAdd(this.state.text);

        this.setState({text: ''});
    }

    render() {
        return <div className="mb-3">
            <form className="d-flex" onSubmit={this.onSubmit}>
                <div className="me-3">
                    <input
                        type="text"
                        required=""
                        className="form-control"
                        placeholder="I am going..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">add</button>
            </form>
        </div>
    }

}

TextField.defaultProps = {
    onAdd: (text) => {}
}

export default TextField;
// END
