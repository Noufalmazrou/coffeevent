import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                
        <article className="main-intro">

          <Jumbotron fluid className="jumbotron-style">
            <Container className="jumbotron-content">
              <h1>Hello i will be the filter search</h1>
            </Container>
          </Jumbotron>
        </article>
        <Search/>
        <h1 className="Section-Title">THIS MONTH'S EVENTS</h1>
        <Row>
          {this.state.arry.map(() => {
            return <HomePage />
          })}
        </Row>
        {this.state.showAll ?
          <div style={{ textAlign: 'center' }}>
            <Button className="ShowHideButton" onClick={() => { this.setState({ arry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], showAll: false, hideThem: true }) }}>Show all</Button>
          </div>
          : null}
        {this.state.hideThem ?
          <div style={{ textAlign: 'center' }}>
            <Button className="ShowHideButton" onClick={() => { this.setState({ arry: [1, 2, 3, 4], showAll: true, hideThem: false }) }}>Hide</Button>
          </div>



          : null}
            </div>
        )
    }
}
