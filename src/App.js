/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react';
import Headline from './components/headline'

export default class App extends React.Component {
  state = {
    query: '',
    headlines :[]
  }

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount(){
    axios.get('http://hn.algolia.com/api/v1/search?query=&tags=story')
    .then((res) => {
      console.log('This is the data', res.data.hits)
      this.setState({
        headlines : res.data.hits
      })

    })
    .catch((err) => {
      console.log(err)
    })
  }

  searchHN(word){
    axios.get(`http://hn.algolia.com/api/v1/search?query=${word}&tags=story`)
    .then((res) => {
      console.log('This is the data', res.data.hits)
      this.setState({
        headlines : res.data.hits
      })

    })
    .catch((err) => {
      console.log(err)
    })

  }

  handleChange(event){
    this.setState({query: event.target.value})
    console.log('this is the event' + event.target.value)
    this.searchHN(event.target.value)
  }

  render(){
  return (
    <div className="App">
      <div className="container">
      <div className="main-section">
        <div className="header">
              <img className="hacker-news-clone-logo" src="hnlogo.png"/>
              <div className="search-bar">
                 <div className="search-content">
                    <div className="search-logo-and-highlight">
                      <img className="search-logo" src="search-logo.svg"/>
                      <input className="search-highlight" 
                      placeholder="Search stories by title, url or author"
                      value={this.state.query} onChange={this.handleChange}
                      />
                    </div>
                    <img className="algolia-logo" src="algolia_logo.svg"/> 
                  </div>
              </div>
              <img className="settings-logo" src="settings.svg"/>
        </div>
        <div className="options-section hide">
              <div className="single-options stories-options hide">
                  <p className="hide">Stories</p>
                  <img className="dropdown-arrow hide" src="dropdown-arrow.svg"/>
              
              </div>
              <div className="single-options popularity-options">
                  <p>Popularity</p>
                  <img className="dropdown-arrow" src="dropdown-arrow.svg"/>
              </div>

              <div className="single-options all-time-options">
                  <p>All Time</p>
                  <img className="dropdown-arrow" src="dropdown-arrow.svg"/>
              </div>
        </div>
        <div className="list-of-headlines">
            <Headline headlines={this.state.headlines} />
        </div>
        
        <div className="pagination-section">
              <div className="pagination-box hide">
                <p>1</p>
              </div>
              <div className="pagination-box hide">
                <p>2</p>
              </div>
        </div>
      </div>
        <div className="footer-section">
            <ul className="footer-section-li">
              <a className="link-style" href="https://hn.algolia.com/about">
                  <li>About</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://hn.algolia.com/settings">
                  <li>Setting</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://hn.algolia.com/help">
                  <li>Help</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://hn.algolia.com/api">
                  <li>API Documentation</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://news.ycombinator.com/">
                  <li>Hacker News</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://github.com/algolia/hn-search">
                  <li>Fork/Contribute</li>
              </a>
              <li>•</li>
              <a className="link-style" href="https://hn.algolia.com/cool_apps">
                  <li>Cool Apps</li>
              </a>
            </ul>
            
        </div>

      </div>
      
    </div>
  );

}
}

