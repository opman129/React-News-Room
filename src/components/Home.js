import React, { Component } from 'react';
import axios from 'axios';
import './css/Home.css'

export class Home extends Component {
    state = {
        home : []
    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7')
        .then (res => {
            console.log(res.data.results)
            const getHome = res.data.results;
            this.setState({home: getHome})           
        })
      }

    render() {
        return (
            <div>
                <div>
                    {this.state.home.slice(19, 20).map(item =>(
                        <img src ={item.multimedia[0].url}  class = "img-fluid hero-img"/>

                    ))
                        
                    }
                </div>

                <div className = "padding">
                    {
                        <div className = "container">
                            <div className = "row">
                                <div className = " col-sm-12 col-md-4 col-lg-4">
                                    {
                                        this.state.home.slice(4, 5).map(item => (
                                            <div>
                                                 <h1>{item.title}</h1>
                                                <h3>{item.abstract}</h3>
                                                <h5>{item.byline}</h5>
                                            </div>  
                                        ))
                                    }
                                </div>
                                <div className = " col-sm-12 col-md-4 col-lg-4">
                                    {
                                        this.state.home.slice(4, 5).map(item => (
                                            <div>
                                                 <img src = {item.multimedia[0].url} class  = "img-topmost" />
                                            </div>  
                                        ))
                                    }
                                </div>
                                <div className = " col-sm-12 col-md-4 col-lg-4">
                                    {
                                        this.state.home.slice(5, 6).map(item => (
                                            <div>
                                                <h1>{item.title}</h1>
                                                <h3>{item.abstract}</h3>
                                                <h5>{item.byline}</h5>                                             
                                            </div>  
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    }
                </div>


                <div class = "padding">
                {
                  <div className = "container">
                      <div className = "row">
                            <div className = "col-xs-12 col-md-4 col-lg-4">                           
                                {/* {this.state.home.slice(0, 1).map(item => (
                                    <p>{item.title}</p>
                                ))}  */}
                                {this.state.home.slice(0, 1).map(item => (
                                    <div class="card card-topmost">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body "  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                             <h6 class="card-text"> {item.byline}</h6>     
                                             <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))} 
                            </div>
                            <div className = "col-xs-12 col-md-4 col-lg-4">
                            {this.state.home.slice(1, 2).map(item => (
                                    <div class="card card-topmost">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body "  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                            <h6 class="card-text"> {item.byline}</h6>     
                                            <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))}
                            </div>
                            <div className = "col-xs-12 col-md-4 col-lg-4">
                            {this.state.home.slice(2, 3).map(item => (
                                    <div class="card card-topmost">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body card-topmost"  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                            <h6 class="card-text"> {item.byline}</h6>     
                                            <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))}
                            </div>
                        </div>
                  </div>     
               }
                </div> 

                <div class = "padding">
                {
                  <div className = "container">
                      <div className = "row">
                            <div className = "col-xs-12 col-md-4 col-lg-4">                           
                                {this.state.home.slice(8, 9).map(item => (
                                  <img src ={item.multimedia[0].url}  class = "img-fluid"/>
                                ))} 
                            </div>
                            <div className = "col-xs-12 col-md-4 col-lg-4">
                            {this.state.home.slice(9, 10).map(item => (
                                <div>
                                    <h1>{item.title}</h1>
                                   <h3>{item.abstract}</h3>
                                   <h5>{item.byline}</h5>
                                   <h6>{item.published_date}</h6>
                                   <h6>{item.section}</h6>
                                   <a href = {item.url}>Continue Reading</a>
                                </div>                              
                                ))}
                            </div>

                            <div className = "col-xs-12 col-md-4 col-lg-4">
                            {this.state.home.slice(10, 11).map(item => (
                                 <div>
                                 <h1>{item.title}</h1>
                                <h3>{item.abstract}</h3>
                                <h5>{item.byline}</h5>
                                <h6>{item.published_date}</h6>
                                <h6>{item.section}</h6>
                                <a href = {item.url}>Continue Reading</a>
                             </div> 
                                ))}
                            </div>
                        </div>
                  </div>     
               }
                </div>

                <div class = "padding">
                {
                  <div className = "container">
                      <div className = "row">
                            <div className = "col-xs-12 col-md-6 col-lg-6">                           
                                {this.state.home.slice(7, 8).map(item => (
                                    <div class="card card-bottom">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body card-dark"  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                             <h6 class="card-text"> {item.byline}</h6>     
                                             <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))} 
                            </div>
                            <div className = "col-xs-12 col-md-6 col-lg-6">
                            {this.state.home.slice(8, 9).map(item => (
                                    <div class="card card-bottom">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body card-dark"  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                            <h6 class="card-text"> {item.byline}</h6>     
                                            <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))}
                            </div>
                        </div>
                  </div>     
               }
                </div> 


                <div class = "padding">
                {
                  <div className = "container">
                      <div className = "row">
                            <div className = "col-xs-12 col-md-6 col-lg-6">                           
                                {this.state.home.slice(10, 11).map(item => (
                                  <div>
                                    <div class = "row">
                                        <div class = "col-md-6 col-lg-6">
                                        <div class="card height">
                                            <div class="card-body bg-light text-dark">
                                                <h3 class="card-title">{item.title}</h3>
                                                <h4 class="card-text">{item.abstract}.</h4>
                                                <a href={item.url} class="card-link">Continue</a> 
                                            </div>
                                        </div>

                                        </div>
                                        <div class = "col-md-6 col-lg-6">
                                        <div class="card height">
                                            <div class="card-body bg-light text-dark">
                                                <h3 class="card-title">{item.title}</h3>
                                                <h4 class="card-text">{item.abstract}.</h4>
                                                <a href={item.url} class="card-link">Continue</a> 
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>                               
                                ))} 
                            </div>


                            <div className = "col-xs-12 col-md-6 col-lg-6">
                            {this.state.home.slice(12, 13).map(item => (
                                    <div class="card card-bottom">
                                        <img src ={item.multimedia[0].url} class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body card-dark"  >
                                             <h4 class="card-title">{item.title}</h4>
                                             <h5 class="card-text" >{item.abstract}</h5>
                                            <h6 class="card-text"> {item.byline}</h6>     
                                            <h6>{item.section}</h6>  
                                        </div>
                                   </div> 
                                ))}
                            </div>
                        </div>
                  </div>     
               }
                </div> 














            </div>
        )
    }
}




export default Home

