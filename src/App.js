import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
  <>
  
    <div className="hd">
    <div className="topnav">
  <a href="#news" > <img className='pic1' src="https://i.ibb.co/frrTBWF/kivlik.jpg" alt="Girl in a jacket" width="85" height="25"></img></a>
  <div className="rnav">
  <a href="#news" >About Us</a>
  <a href="#contact">Services</a>
  <a href="#about">Pricing</a>
  <a href="#about" >Contact</a>
  <div className="leftnav">
  <a href="#about">Login</a>
  <a href="#about" >SignUp</a>
  </div>
  </div>
 
  <svg viewBox="0 0  1440 320">
      <path fill="#F5F5F5" d="M0,96C48,96,192,96,336,117.3C480,139,624,181,768,192C912,203,1056,181,1200,176C1344,171,1440,181,1440,181L1440,320L0,320L0,96Z"></path>
    </svg>
  
</div>
    </div>
     <div className="careers">
      <h5 >CAREERS</h5>
    </div>
  <div className="txt" >
   <h4>Submit Your Resume</h4>
    <h6>Become discoverable for all your jobs</h6>
    <img className='pic' src="https://i.ibb.co/HCXJVVr/seatbgrmved.png" alt="Girl in a jacket" width="390" height="390"></img>
  </div>
   <div className="pd">
    <h5>Personal Details</h5>
    <h6> Please complete the below  form and attach a CV</h6>
   </div>
    <div className="container">
   <label style={{ fontSize: "12px", fontFamily: "Arial" }} >Email Address</label>
  <br />
  <input type="email" id="email" name="email" placeholder="Enter your email"  size="35"  style={{ borderRadius: "6px" }} />
  <br />
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <div>
    <label  style={{ fontSize: "12px", fontFamily: "Arial" }}>First Name</label>
    <br />
    <input type="text"  size="35"  id="firstName" name="firstName" placeholder="Enter your first name" style={{ marginLeft: "5px" ,borderRadius: "6px" }} />
  </div>
  <div>
    <label  style={{ fontSize: "12px", fontFamily: "Arial" }}>Last Name</label>
    <br />
    <input type="text" size="35"  id="lastName" name="lastName" placeholder="Enter your last name" style={{ marginLeft: "5px",borderRadius: "6px" }} />
  </div>
  <div>
    <label htmlFor="phone"  style={{ fontSize: "12px", fontFamily: "Arial" }}>Telephone</label>
    <br />
    <input type="tel"size="35"  id="phone" name="phone" placeholder="Enter your phone number" style={{ marginLeft: "5px",borderRadius: "6px" }} />
  </div>
</div>
<label style={{ marginBottom: "20px", display: "block",fontSize: "12px", fontFamily: "Arial" }}>Upload your CV:</label>
<input type="file" id="cvUpload" name="cvUpload" accept=".pdf,.doc,.docx" placeholder="Upload CV" style={{ marginLeft: "5px" ,color: "#524241" }} /> <br />
<label style={{ fontSize: "12px", fontFamily: "Arial" }}> Select resume file (TXT, pdf or word DOC)</label>
<br />
<button type="submit" style={{ marginTop: "16px", backgroundColor: "#007bff", color: "#fff", borderRadius: "12px", padding: "8px 29px", border: "none" , fontSize: "13px"}}>Submit</button>
 </div>

 <div className="footer">
  <div className="container2">
   <div className="one">
    <h5> <img className='pic1' src="https://i.ibb.co/pb2bg0M/kiv2.jpg" alt="Girl in a jacket" width="85" height="25"></img></h5>
    <p> KIVLIC is a mobile streaming car wash company which offer premiem car wash  detailing service at your doorstep Convinently book a car wash with  a few taps on your phone. KIVLIK has several pakages to meet your budget  and requirment. KIVLIK has several pakages to meet  your budger and requirment.Convinenetly book a car wash with  few steps useing KIVLIK app or website</p>
   </div>
   <div className="two">
   <h4>COMPANY</h4>
   <h5>Who we are</h5>
   <h6>Blog</h6>
   <h6>Careers</h6>
   <h6>Report Fraud</h6>
   <h6>Contact</h6>
   <h6>Investor Relation</h6>
   </div>
   <div className="three">
    <h5>GOT QUESTIONS?</h5>
    <h4>Help Center</h4>
   <p>FOLLOW US</p>
   <a href=""><img className='pic1' src="https://img.icons8.com/external-others-inmotus-design/1x/external-Facebook-phone-operations-and-functions-others-inmotus-design.png" alt="Girl in a jacket" width="26" height="28"></img></a>
   <a href=""><img className='pic1' src="https://img.icons8.com/plumpy/1x/twitter.png" alt="Girl in a jacket" width="26" height="28"></img></a>
   <a href=""><img className='pic1' src="https://img.icons8.com/color/1x/youtube-play.png" alt="Girl in a jacket" width="26" height="28"></img></a>
  <a href=""> <img className='pic1' src="https://img.icons8.com/3d-fluency/1x/instagram-new.png" alt="Girl in a jacket" width="26" height="28"></img></a>
   <br />
  <a href=""> <img className='pic1' src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" alt="" width="150" height="40"></img></a>
   <a href=""><img className='pic1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lf-nORoBwe06kDYst28iDYA8wh0hWZlNmA&usqp=CAU" alt="" width="150" height="40"></img></a>
   </div>
  </div>
 </div>
 <footer>
  <div className="container">
    <p>©️Kivlik 2021 All Rights Reserved</p>
    <p  className="fr">Privacy|Terms|Security|Sitemap</p>
  </div>
  
 </footer>

  </>
  );
}

export default App;
