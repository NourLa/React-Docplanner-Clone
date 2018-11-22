import React, { Component } from 'react';
import './Component4.css';
class Component4 extends Component {
    render() {
      return (

        <section className="section4">
        <div className="section4-header">
            <h1>
                Improve the lives of millions.
                Change yours forever
            </h1>
            <p>
                More than 500 team mates share our same vision, goals and passion. With offices in Warsaw,
                Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
            </p>
        </div>
        <div className="section4-body">
            <div className="section4-body-bloc1">
            {words_list1.map(item => 
                <div className="section4-body-image1" key={item.id}>
              
                    <a href="https://www.docplanner.com/career?loc=poland#jobs-offers" > 
                        <figure>
                            <img className="img-docplanner" src={item.image} alt=""/>

                        </figure>
                        <div className="image-discr">
                            {item.place} <span className="difftextbutton">
                                <button className="button-discr">See openings</button>
                            </span>
                        </div>
                    </a>
                    </div>
                )  }

            </div>
            <div className="section4-body-bloc2">
            {words_list2.map(item => 
                <div className="section4-body-image1" key={item.id}>
              
                    <a href="https://www.docplanner.com/career?loc=poland#jobs-offers" > 
                        <figure>
                            <img className="img-docplanner" src={item.image} alt=""/>

                        </figure>
                        <div className="image-discr">
                            {item.place} <span className="difftextbutton">
                                <button className="button-discr">See openings</button>
                            </span>
                        </div>
                    </a>
                    </div>
                )  }

            </div>
        </div>
    </section>
        );
    }
  }

  const words_list1 = [
    {id: 1,image:' https://www.docplanner.com/images/warsaw.png', place:'Warsaw', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers' },
    {id: 2,image:' https://www.docplanner.com/images/barcelona.png', place:'Barcelona', link:'https://www.docplanner.com/career?&loc=spain#jobs-offers' },
    {id: 3,image:' https://www.docplanner.com/images/istanbul.png', place:'Istanbul', link:'https://www.docplanner.com/career?&loc=rome#jobs-offers' }];
    const words_list2 = [
    {id: 4,image:' https://www.docplanner.com/images/rome.png', place:'Rome', link:'https://www.docplanner.com/career?&loc=italy#jobs-offers' },
    {id: 6,image:' https://www.docplanner.com/images/mexico-city.png', place:'Mexico City', link:'https://www.docplanner.com/career?&loc=mexico#jobs-offers' },
    {id: 5,image:' https://www.docplanner.com/images/curitiba.png', place:'Curitiba', link:'https://www.docplanner.com/career?&loc=brazil#jobs-offers' }

];

      export default Component4;