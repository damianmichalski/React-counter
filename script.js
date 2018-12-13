var Counter = React.createClass({
    getInitialState: function() {
        var initialValue =this.props.initialValue || 0 ;
        var initialStep =this.props.initialStep || 1 ;
        return {
            counter: initialValue,
            step: initialStep
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + this.state.step
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - this.state.step
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

var firstCounter = React.createElement(Counter, {stepValue: 3});
var secondCounter = React.createElement(Counter, {initialValue: 5});
var container = React.createElement('div', {}, firstCounter, secondCounter);
ReactDOM.render(container, document.getElementById('app'));

