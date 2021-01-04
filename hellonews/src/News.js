import React, { Component } from 'react';

class News extends Component {
    render() {
        console.log(this.props.news);
        return(
            <div className="wrapper">
                <main>
                    <div className="flexbox1">
                        <div className="item">
                            <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[1].urlToImage + ')'}}></div>
                            <a href={this.props.news[1].url} target="_blank"><h3>{this.props.news[1].title.substring(0, 40) + (this.props.news[1].title.length > 40 ? '...' : '')}</h3></a>
                            <p>{this.props.news[1].source.name}</p>
                        </div>
                        <div className="item">
                            <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[2].urlToImage + ')'}}></div>
                            <a href={this.props.news[2].url} target="_blank"><h3>{this.props.news[2].title.substring(0, 40) + (this.props.news[2].title.length > 40 ? '...' : '')}</h3></a>
                            <p>{this.props.news[2].source.name}</p>
                        </div>
                        <div className="item">
                            <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[3].urlToImage + ')'}}></div>
                            <a href={this.props.news[3].url} target="_blank"><h3>{this.props.news[3].title.substring(0, 40) + (this.props.news[3].title.length > 40 ? '...' : '')}</h3></a>
                            <p>{this.props.news[3].source.name}</p>
                        </div>
                        <div className="item">
                            <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[4].urlToImage + ')'}}></div>
                            <a href={this.props.news[4].url} target="_blank"><h3>{this.props.news[4].title.substring(0, 40) + (this.props.news[4].title.length > 40 ? '...' : '')}</h3></a>
                            <p>{this.props.news[4].source.name}</p>
                        </div>
                    </div>
                    <div className="columns1">
                        <div className="col-left">
                            <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[0].urlToImage + ')'}}>
                                <a href={this.props.news[0].url} target="_blank"><h2>{this.props.news[0].title} - '{this.props.news[0].source.name}'</h2></a>
                            </div>
                        </div>
                        <div className="col-right">
                            <h3 className="pop">POPULAR ARTICLES</h3>
                            <div className="flexbox2">
                                <div className="num">1.</div>
                                <div>
                                    <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[5].urlToImage + ')'}}></div>
                                    <a href={this.props.news[5].url} target="_blank"><h3>{this.props.news[5].title.substring(0, 40) + (this.props.news[5].title.length > 40 ? '...' : '')}</h3></a>
                                    <p>{this.props.news[5].source.name}</p>
                                </div>
                            </div>
                            <div className="flexbox2">
                                <div className="num">2.</div>
                                <div>
                                    <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[6].urlToImage + ')'}}></div>
                                    <a href={this.props.news[6].url} target="_blank"><h3>{this.props.news[6].title.substring(0, 40) + (this.props.news[6].title.length > 40 ? '...' : '')}</h3></a>
                                    <p>{this.props.news[6].source.name}</p>
                                </div>
                            </div>
                            <div className="flexbox2">
                                <div className="num">3.</div>
                                <div>
                                    <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[7].urlToImage + ')'}}></div>
                                    <a href={this.props.news[7].url} target="_blank"><h3>{this.props.news[7].title.substring(0, 40) + (this.props.news[7].title.length > 40 ? '...' : '')}</h3></a>
                                    <p>{this.props.news[7].source.name}</p>
                                </div>
                            </div>
                            <div className="flexbox2">
                                <div className="num">4.</div>
                                <div>
                                    <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[8].urlToImage + ')'}}></div>
                                    <a href={this.props.news[8].url} target="_blank"><h3>{this.props.news[8].title.substring(0, 40) + (this.props.news[8].title.length > 40 ? '...' : '')}</h3></a>
                                    <p>{this.props.news[8].source.name}</p>
                                </div>
                            </div>
                            <div className="flexbox2">
                                <div className="num">5.</div>
                                <div>
                                    <div className="img-container" style={{backgroundImage: 'url(' + this.props.news[9].urlToImage + ')'}}></div>
                                    <a href={this.props.news[9].url} target="_blank"><h3>{this.props.news[9].title.substring(0, 40) + (this.props.news[9].title.length > 40 ? '...' : '')}</h3></a>
                                    <p>{this.props.news[9].source.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default News;