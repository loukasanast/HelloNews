import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
import { articles } from './data';

class Technology extends Component {
    state = {
        news: articles
    }

    componentDidMount() {
        axios.get('./api/news/technology')
            .then(data => {
                console.log(data);
                this.setState({
                    news: data.data.articles
                });
            });
    }

    render() {
        return(
            <News news={this.state.news} />
        );
    }
}

export default Technology;