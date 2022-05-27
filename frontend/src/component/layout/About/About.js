import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          {/* <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Abhishek Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
          <div >
	          {/* <br style="content:'';display:inline-block;width:100%;height:15px;"> */}
	          
			<div><p>Kanchan Deep Jyot is a respected name in the market of Nagpur. We are in the business of manufacturing and supplying the best quality akhand jyot batti, kanchan twisted wicks, kanchan plain long wicks, kanchan round wicks, round wicks, and Sava lakh batti. The akhand jyot batti that we offer is made using the most advanced technology. Our akhand jyot batti is widely known for its high-quality. The kanchan twisted wicks offered by us are largely appreciated by many clients owing to their good making. Our round wicks are widely used in various ritual works. Moreover, our expertise in offering various other products has allowed us to gain a huge clientele all over Nagpur.<p/> We are providing these products in different sizes as well. Customers can place their orders now and rest assured for the timely delivery.Kanchan Deep Jyot is a Nagpur (Maharashtra, India) based company, which is operating in the year since 2014. Under the expert guidance of Mr. Omprakash Parihar (Company Founder), the company has become a leading name in the industry.<p/><strong>Our Storehouse</strong>To store our products in a safe and secure manner, we have maintained the most advanced storehouse in Nagpur. This storehouse is divided into several sections and is capable of storing a large quantity of products at a time.<strong>Our Team</strong>We are backed by a reliable team of adroit and meticulous professionals, who have worked in their respective domain for many years. These professionals are widely known for their impressive working styles as well.</p></div>
		
		  <p></p>
			<table className="tableOuter">
				<tbody><tr> 
				<td>Name of Company Founder</td> 
				<td>Mr. Omprakash Parihar</td> 
				</tr>
				<tr> 
				<td>Year of Establishment</td> 
				<td>2014</td> 
				</tr>
				<tr> 
				<td>Nature of Business</td> 
				<td>Manufacturer &amp; Supplier</td> 
				</tr>
				<tr> 
				<td>Number of Employees</td> 
				<td>100+</td> 
				</tr>
				<tr> 
				<td >GST No.</td> 
				<td >27CQSPP1392Q1ZP</td> 
				</tr>
			</tbody></table>
		
		
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
