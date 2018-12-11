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

    componentWillMount: function() {
        console.log('Before render!');
    },


    render: function() {
        return React.createElement('div', {}, 'Zacznij liczyć ',
            React.createElement('div', {className: 'alert alert-success'}, 'Licznik ' + this.state.counter),
            React.createElement('button', {className: 'btn btn-success', onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {className: 'btn btn-warning', onClick: this.decrement}, 'Odejmij')
        )
    },
    componentDidMount: function() {
        console.log('After render!');
    },
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var CounterSecond = React.createClass({
    getInitialState: function() {
        return {
            counter: 5
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

var elementSecond = React.createElement(CounterSecond);
ReactDOM.render(elementSecond, document.getElementById('app2'));