var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {}, 'Zacznij liczyć ',
            React.createElement('div', {className: 'alert alert-success'}, 'Licznik ' + this.state.counter),
            React.createElement('button', {className: 'btn btn-success', onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {className: 'btn btn-warning', onClick: this.decrement}, 'Odejmij')
        )
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));