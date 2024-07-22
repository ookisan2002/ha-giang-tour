import { forwardRef, useCallback, useEffect, useState } from "react";
import "./styles.css";
import "@radix-ui/themes/styles.css";
import { Box, Select, TextArea, TextField } from "@radix-ui/themes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng tính từ 0 nên cần +1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const FormatCost = (value) => {
  return value.toLocaleString('en-US');
};
const Section4 = forwardRef((props,ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    pick_up: "",
    pick_up_date: formatDate(new Date()),
    pick_up_address: "",
    droff: "",
    droff_date: formatDate(new Date()),
    droff_address: "",
    basic_bike: 0,
    big_bike: 0,
  });
  const handleChange = (type, e) => {
    if (type) {
      setFormData({
        ...formData,
        [type]: e,
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  const onChangeQuantity = useCallback((typeCheck, action) => {
    if (typeCheck == "basic") {
      if (action == "minus") {
        if(formData.basic_bike > 0)
        setFormData((prev) => ({
          ...prev,
          basic_bike: prev.basic_bike - 1,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          basic_bike: prev.basic_bike + 1,
        }));
      }
    } else {
      if (action == "minus") {
        if(formData.big_bike > 0)
        setFormData((prev) => ({
          ...prev,
          big_bike: prev.big_bike - 1,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          big_bike: prev.big_bike + 1,
        }));
      }
    }
  },[formData]);
  // useEffect(() => {
  //   return () => {
  //     //   [
  //     //     subHeaderForTripDetail,
  //     //     headerForTripDetail,
  //     //     ...articleTitleForTripDetail,
  //     //     ...articleForTripDetail,
  //     //     ...time,
  //     //   ].forEach((el) => {
  //     //     observerForTripDetail.unobserve(el);
  //     //   });
  //     //   observerForTripDetail.disconnect();
  //   };
  // });
  return (
    <div className="section4" id="section4" ref={ref}>
      <p>EASY</p>
      <h3>ONLINE BOOKING</h3>
      <div class="section4_content">
        <div class="form_container">
          <form onSubmit={handleSubmit}>
            <div class="type_motobike_container">
              <p>3 Days Motorbike Tour:</p>
              <div class="type_motobike">
                <div class="type_motobike_option">
                  <p>Easy Rider - Basic Bike</p>
                  <div class="controller">
                    <p class="type_motobike_money">$189</p>
                    <div
                      class="minus"
                      onClick={()=>onChangeQuantity("basic",'minus')}
                    >
                      -
                    </div>
                    <p class="type_motobike_quantity">{String(formData.basic_bike).padStart(2, '0')}</p>
                    <div
                      class="plus"
                      onClick={()=>onChangeQuantity("basic",'plus')}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div
                  class="type_motobike_option"
                  style={{
                    borderBottom: "1px solid rgba(1,1,46,.134)",
                    paddingBottom: "5px",
                  }}
                >
                  <p>Easy Rider - Big Bike</p>
                  <div class="controller">
                    <p class="type_motobike_money">$239</p>
                    <input
                      type="number"
                      style={{ display: "none" }}
                      id="self_driving"
                      name="self_driving"
                    />
                    <div
                      class="minus"
                      onClick={()=>onChangeQuantity("big",'minus')}
                    >
                      -
                    </div>
                    <p class="type_motobike_quantity">{String(formData.big_bike).padStart(2, '0')}</p>
                    <input
                      type="number"
                      style={{ display: "none" }}
                      id="local_driver"
                      name="local_driver"
                    />
                    <div
                      class="plus"
                      onClick={()=>onChangeQuantity("big",'plus')}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div class="totalCost">
                  <p>Total:</p>
                  <div class="total">
                    <p>${formData.basic_bike*189 + formData.big_bike*239}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="customer_infor_container">
              <p>Customer information:</p>
              <div class="customer_infor">
                <TextField.Root
                  placeholder="Name*"
                  className="row form_btn"
                  width="100%"
                  onChange={(e) => handleChange(null, e)}
                  name="name"
                />
                <div className="col_2 row col_1_mobile_form">
                  <TextField.Root
                    onChange={(e) => handleChange(null, e)}
                    name="email"
                    placeholder="Email*"
                    className="row form_btn"
                  />
                  <TextField.Root
                    onChange={(e) => handleChange(null, e)}
                    name="contact"
                    placeholder="Contact*"
                    className="row form_btn"
                  />
                </div>
                <TextArea
                  size="3"
                  placeholder="Message*"
                  className="row form_btn"
                  onChange={(e) => handleChange(null, e)}
                  name="message"
                />
                <div className="col_3 row row_2_col_2_mobile">
                  <div className="btn_container">
                    <p>Pick up</p>
                    <Select.Root
                      defaultValue=""
                      onValueChange={(e) => handleChange("pick_up", e)}
                    >
                      <Select.Trigger
                        placeholder="pick up..."
                        className="form_btn"
                      />
                      <Select.Content className="test" name="pick_up">
                        <Select.Item value="Hà Nội">Hà Nội</Select.Item>
                        <Select.Item value="Sapa">Sapa</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div className="btn_container">
                    <p>Departure date</p>
                    <div className="date_picker_container">
                      <input
                        type="date"
                        min={new Date()}
                        value={formData.pick_up_date}
                        defaultValue={new Date()}
                        placeholderText={formatDate(new Date())}
                        className="form_date_picker"
                        onChange={(e) =>
                          handleChange("pick_up_date", e.target.value)
                        }
                        
                        name="pick_up_date"
                      />
                      <img src="assets/calender.svg" alt="" />
                    </div>
                  </div>
                  <div className="btn_container">
                    <p>Address*</p>
                    <Select.Root
                      defaultValue=""
                      onValueChange={(e) => handleChange("pick_up_address", e)}
                    >
                      <Select.Trigger
                        placeholder="Address*"
                        className="form_btn"
                      />
                      <Select.Content name="pick_up_address">
                        <Select.Item value="16:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) - Local bus">
                          16:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) -
                          Local bus
                        </Select.Item>
                        <Select.Item value="19:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) - Local bus">
                          19:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) -
                          Local bus
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                </div>
                <div className="col_3 row row_2_col_2_mobile">
                  <div className="btn_container">
                    <p>Droff</p>
                    <Select.Root
                      defaultValue=""
                      onValueChange={(e) => handleChange("droff", e)}
                    >
                      <Select.Trigger
                        placeholder="droff..."
                        className="form_btn"
                      />
                      <Select.Content name="droff">
                        <Select.Item value="Hà Nội">Hà Nội</Select.Item>
                        <Select.Item value="Sapa">Sapa</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div className="btn_container">
                    <p>Departure date</p>
                    <div className="date_picker_container">
                      <input
                        type="date"
                        min={formatDate(new Date())}
                        defaultValue={new Date()}
                        value={formData.droff_date}
                        className="form_date_picker"
                        onChange={(e) =>
                          handleChange("droff_date", e.target.value)
                        }
                        
                        name="droff_date"
                      />
                      <img src="assets/calender.svg" alt="" />
                    </div>
                  </div>
                  <div className="btn_container">
                    <p>Address*</p>
                    <Select.Root
                      defaultValue=""
                      onValueChange={(e) => handleChange("droff_address", e)}
                    >
                      <Select.Trigger
                        placeholder="Address*"
                        className="form_btn"
                      />
                      <Select.Content name="droff_address">
                        <Select.Item value="16:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) - Local bus">
                          16:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) -
                          Local bus
                        </Select.Item>
                        <Select.Item value="19:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) - Local bus">
                          19:00 From Lustig Hostel ( 762 Dien Bien Phu, Sapa) -
                          Local bus
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="confirm_container">
          <h3>CONFIRMED TOUR BOOKING:</h3>
          <div class="table">
            <div class="row">
              <p>Type of tour</p>
              <p>HA GIANG LOOP TOUR (3D3N)</p>
            </div>
            <div class="row">
              <p>Name</p>
              <p class="name">{formData.name}</p>
            </div>
            <div class="row">
              <p>Contact Info</p>
              <p class="contact">{formData.email} - {formData.contact}</p>
            </div>
            <div class="row pickUp">
              <p>Pick up</p>
              <p class="pickUp">{formData.pick_up_date} from {formData.pick_up} at {formData.pick_up_address}</p>
            </div>
            <div class="row">
              <p>Tour duration</p>
              <p class="tourDuration">3 Days</p>
            </div>
            <div class="row dropOff">
              <p>Drop off</p>
              <p class="dropOff">{formData.droff_date} to {formData.droff} at {formData.droff_address}</p>
            </div>
            <div class="row">
              <p>Easy Rider - Basic Bike</p>
              <p class="basicBike">{formData.basic_bike} x $189 ({FormatCost(4819500*formData.basic_bike)} VND)</p>
            </div>
            <div class="row">
              <p>Easy Rider - Big Bike</p>
              <p class="bigBike">{formData.big_bike} x $239 ({FormatCost(6094500*formData.big_bike)} VND)</p>
            </div>
            <div class="row">
              <p>Message</p>
              <p class="message">{formData.message}</p>
            </div>
          </div>
          <div class="sumerize">
            <div class="provisional">
              <p>Provisional:</p>
              <p class="quantity">{FormatCost(4819500*formData.basic_bike+6094500*formData.big_bike)} VND</p>
            </div>
            <div class="extraFee">
              <p>Service Charge 3%:</p>
              <p class="quantity">{FormatCost((4819500*formData.basic_bike+6094500*formData.big_bike)*0.3)} VND</p>
            </div>
            <div class="total">
              <p>Total amount:</p>
              <p class="quantity">{FormatCost((4819500*formData.basic_bike+6094500*formData.big_bike)*1.3)} VND</p>
            </div>
          </div>
          <div class="btn_group">
            <button className="pay_btn ">BOOK & PAY NOW</button>
            <button className="send_request_btn">SEND REQUEST</button>
            <button className="whatsapp_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M0.449219 19.4788L1.79775 14.5815C0.967884 13.1494 0.529376 11.5201 0.529376 9.85799C0.529376 4.64615 4.79186 0.40625 10.021 0.40625C12.5624 0.40625 14.9436 1.39227 16.7353 3.17651C18.5271 4.96074 19.5125 7.33659 19.5125 9.86269C19.5125 15.0745 15.25 19.3144 10.021 19.3144H10.0162C8.42723 19.3144 6.86652 18.9153 5.48027 18.1641L0.449219 19.4788Z"
                  fill="#0FA82E"
                  class="green_part"
                ></path>
                <path
                  d="M0.109375 19.8158L1.50506 14.7449C0.646901 13.2611 0.189532 11.5755 0.194247 9.85231C0.194247 4.45265 4.60762 0.0625 10.03 0.0625C12.6611 0.0625 15.1318 1.08139 16.9849 2.93136C18.8426 4.78133 19.8658 7.24169 19.8611 9.85701C19.8611 15.2567 15.4477 19.6468 10.0253 19.6468H10.0206C8.37501 19.6468 6.75772 19.2336 5.3196 18.4542L0.109375 19.8158ZM5.56479 16.6793L5.86184 16.8578C7.11607 17.5996 8.55419 17.9894 10.0206 17.9941H10.0253C14.5283 17.9941 18.1966 14.3458 18.1966 9.85701C18.1966 7.68306 17.3479 5.64058 15.8061 4.1005C14.2642 2.56043 12.2084 1.71526 10.0253 1.71526C5.51764 1.71526 1.84926 5.36355 1.84926 9.85231C1.84926 11.3877 2.27834 12.8855 3.09877 14.1814L3.29209 14.4913L2.46694 17.4916L5.56479 16.6793Z"
                  fill="#0FA82E"
                  class="green_part"
                ></path>
                <path
                  d="M7.5719 5.75535C7.38801 5.3469 7.19469 5.33751 7.02023 5.33282C6.87878 5.32812 6.71375 5.32813 6.54872 5.32813C6.38369 5.32813 6.11964 5.38916 5.89331 5.63329C5.66698 5.87742 5.03516 6.46897 5.03516 7.67554C5.03516 8.87742 5.91689 10.0417 6.03948 10.2061C6.16207 10.3704 7.74165 12.9197 10.236 13.9009C12.3106 14.7178 12.735 14.5535 13.1829 14.5112C13.6356 14.469 14.6352 13.9197 14.8426 13.3469C15.0454 12.7741 15.0454 12.2859 14.9841 12.1826C14.9228 12.0793 14.7578 12.0183 14.5126 11.8962C14.2674 11.7741 13.0603 11.1826 12.834 11.0981C12.6077 11.0136 12.4426 10.976 12.2823 11.2201C12.1173 11.4643 11.6458 12.0136 11.5043 12.1779C11.3629 12.3422 11.2167 12.361 10.9715 12.2389C10.7263 12.1169 9.93419 11.8586 8.99587 11.023C8.26503 10.3751 7.76994 9.57225 7.62848 9.32812C7.48703 9.08399 7.61434 8.95254 7.73693 8.83047C7.84538 8.72249 7.98212 8.54409 8.10471 8.40324C8.22731 8.2624 8.26974 8.15911 8.3499 7.99479C8.43006 7.83047 8.39233 7.68963 8.33104 7.56756C8.26974 7.44549 7.7888 6.23892 7.5719 5.75535Z"
                  fill="white"
                  class="white_part"
                ></path>
              </svg>
              WHATSAPP US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Section4;
