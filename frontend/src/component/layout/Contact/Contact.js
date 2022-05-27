import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      {/* <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: mymailforabhi@gmail.com</Button>
      </a> */}
      <ul class="contact_info large lsn">
				<li><i class="fa fa-user" aria-hidden="true"></i> Mr. Omprakash Parihar</li>
				<li><i class="fa fa-map-marker xlarge" aria-hidden="true"></i> House No. 2568, Ward No. 02, Near Rajesh Kirana, Amar Nagar, MIDC, Hingna Road, Nagpur, Maharashtra, India - 440016</li>
						<li><i class="fa fa-mobile xxxlarge" aria-hidden="true"></i> 
			+91-9561365598</li>
							<li><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:Deep_kanchan@yahoo.com">Deep_kanchan@yahoo.com</a></li>
								<li><i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:opwinwin4@gmail.com">opwinwin4@gmail.com</a></li>
					<li><i class="fa fa-desktop" aria-hidden="true"></i> <a href="http://www.kanchandeepjyot.com" target="_blank" title="http://www.kanchandeepjyot.com">http://www.kanchandeepjyot.com</a></li>
					<li><i class="fa fa-globe" aria-hidden="true"></i> <a href="https://www.exportersindia.com/kanchan-deep-jyot/" target="_blank" title="https://www.exportersindia.com/kanchan-deep-jyot/">https://www.exportersindia.com/kanchan-deep-jyot/</a></li>
				</ul>
    </div>
  );
};

export default Contact;
