import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="wrapper">
                <header>
                    <h1>HELLO NEWS</h1>
                    <div className="sub">NEWSPAPER / MAGAZINE</div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/entertainment">Entertainment</Link></li>
                            <li><Link to="/health">Health</Link></li>
                            <li><Link to="/science">Science</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;