import React, { Component } from 'react';
import './Component1.css';
import './animate.css';
import image1 from './docplanner2.png';
import image2 from './docplanner1.png';
class Component1 extends Component {
  render() {
    return (
<div className="sections">
<div className="section1"> 
<img className="logo-docplanner1"  alt="logo-docplanner1" src="https://www.docplanner.com/img/sygnet.png"/>
<h1>
    Making the healthcare experience more human
</h1>
<div className="logo-docplanner1-details">
    <div className="partition1">

        {words.map(item => 
        <div key={item.id}>
        <p> {item.p} </p> </div>
        )} 
    </div>
</div>
</div>


<div className="section2">

    {words_details.map(item => 
          {  if (item.id === 9)     {  
              return (
                <div className="animated slideInUp"key={item.id}>
                 <div  className="forpatients" >
                 <div className="animated fadeInRight">
            <h2>{item.title2} </h2>
            <h1>{item.title1} </h1>
                 <select >
                <option>Choose country</option>
                <option value="http://www.doctoraliar.com">Argentina</option>
                <option value="http://www.doctoralia.com.au">Australia</option>
                <option value="http://www.doctoralia.com.br">Brazil</option>
                <option value="http://www.doctoralia.cl">Chile</option>
                <option value="http://www.doctoralia.co">Colombia</option>
            </select>
            <br />
            <img alt="img-details" src={item.image}/>
            </div>      </div>   </div>
            ) } 
                return ( 
                    <div className="animated slideInUp" key={item.id}><div  className="forpatients"  style={{background: '#3d83df',  height: '450px'}}>
                  <div className="animated fadeInRight">
              <h2>{item.title2} </h2>
              <h1>{item.title1} </h1>
              <br /><br />  
              <img alt="img-details" src={item.image}/>
              </div>    </div> </div> 
              ) } 
       
            
   
            
            
            )} 
    </div>

    {/* <div className="fordoctors">
            <br />
            <h2></h2>
            <h1></h1>
            <br /> <br />
            <img src=""/>
    </div> */}
</div>











        );
  }
}





const words = [
    {id: 1, p: 'We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable, and that/s why we are always next to them: to help them find the best possible care. Anytime, anywhere.'},
    {id: 2, p: ' We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence,but also to devote their time to what really matters: their patients.'}
  ];

const words_details= [
    {id: 9, title2: 'For patients', title1:'Find a doctor, book a visit and solve any health-related doubt', image: image1},
    {id: 12, title2: 'For doctors', title1:'Save time managing visits and cut no-shows by half', image: image2},
  ];
export default Component1;