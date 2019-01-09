var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawany',
        img: 'lew.jpg'

    },
    {
        id: 3,
        title: 'Bękarty wojny',
        desc: 'Film o II wojne',
        img: 'wojna.jpg'
    },
    {
        id: 4,
        title: 'Włoska robota',
        desc: 'Film o złodziejach',
        img: 'robota.jpg'
    },
    {
        id: 5,
        title: 'Gladiator',
        desc: 'Film o imperium rzymskim',
        img: 'roma.jpg'
    }

];



var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, { title: this.props.movie.title }),
            React.createElement(MovieDescription, { desc: this.props.movie.desc }),
            React.createElement(MovieImg, {img: this.props.movie.img})
        );
    }
});
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired,
    },
    render: function () {
      var films = this.props.list.map(function(movie){
          return React.createElement (Movie, {movie: movie, key: movie.id})
      })
         return React.createElement('ul', {}, films);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('img', {src: this.props.img})
    }
})

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Filmów'),
        React.createElement(MovieList,{list: movies})
    );

ReactDOM.render(element, document.getElementById('app'));