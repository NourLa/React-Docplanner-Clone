import React, { Component } from 'react';
import './Component3.css';
class Component3 extends Component {
    render() {
      return (

<section className="section3">
<div className="grid1">
    <div className="grid1-column1" style= {{flexGrow : "1"}}>
        <h1>
            The world's
            <br/>biggest healthcare platform
        </h1>
        <p>
            We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
            countries.
        </p>
    </div>

    <div className="grid1-column2" style= {{flexGrow : "2"}}>
    
            <div className="grid2">
                <div className="grid2-column1">

                    <div className="grid2-column1-row1"  style= {{flexGrow : "1"}}>

                        <img src="https://www.docplanner.com/img/flag.png" alt="" width="40" height="40"/>
                        <h3>Leader in 8 countries</h3>
                        <p>
                            Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile
                        </p>
                    </div>

                    <div className="grid2-column1-row2"  style= {{flexGrow : "1"}}>

                        <img src="https://www.docplanner.com/img/visits.png"alt="" width="40" height="40"/>
                        <h3>600 000 appointments</h3>
                        <p>
                            booked last month
                        </p>
                    </div>
             
            </div>

            <div className="grid2-column2">
                <div className="grid2-column2-row1" style= {{flexGrow : "1"}}>
                    <img src="https://www.docplanner.com/img/patients.png" alt="" width="40" height="40"/>
                    <h3>20 million unique patients</h3>
                    <p>
                        visit us every month
                    </p>
                </div>

                <div className="grid2-column2-row2" style= {{flexGrow : "1"}} >
                    <img src="https://www.docplanner.com/img/doctors.png" alt="" width="40" height="40"/>
                    <h3>35 000 active doctors</h3>
                    <p>
                        trust
                        in our solutions
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
);
    }
  }



      export default Component3;