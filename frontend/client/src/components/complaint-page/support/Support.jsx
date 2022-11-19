import SupportWrappper from "./support.styles";
import bell from "../assets/Group 30.png";
import twitter from "../assets/Group 31.png";
import phone from "../assets/Group 32.png";

const Support = () => {
  return (
    <SupportWrappper>
      <div className="support-container">
        <h1>Also you can get support from here....</h1>
        <p>Here is our support center you can get support 24/7 here</p>
        <div className="support-img">
          <div>
            <img src={bell} alt="" />
            <p>Forums</p>
          </div>
          <div>
            <img src={twitter} alt="" />
            <p>Twitter</p>
          </div>
          <div>
            <img src={phone} alt="" />
            <p>Phone</p>
          </div>
        </div>
      </div>
    </SupportWrappper>
  );
};

export default Support;
