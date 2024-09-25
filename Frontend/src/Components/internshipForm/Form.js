import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {  FaWhatsapp } from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";


const Form = () => {

const ContactInfo = [
  {
    icon: <RiRedPacketLine />,
    info: "bootcamp@celestialcrafters.co.ke",
    page: "mailto:bootcamp@celestialcrafters.co.ke",
  },
  {
    icon: <FaWhatsapp />,
    info: "+254-727493854  ",
    page: "https://wa.me/254727493854",
  },
];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    country: "",
    highestQualification: "",
    college: "",
    currentAcademicYear: "",
    preferredinternship: "",
    skillLevel: "",
    howDidYouLearnAboutUs: "",
    otherSource: "",
    inquiry: "",
    howGainedSkills: "",
    transactionCode: "",
    paymentName: "",
    terms: false,
  });

  const [serverState, setServerState] = useState();
  const handleChange = (e, ok, msg) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setServerState({ ok, msg });
    setTimeout(() => {
      setServerState(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://celestialcrafters.co.ke/api/submit-form",
        formData
      );
       if (response.status === 200) {
      console.log(response.data);
      
      // Reset form data after successful submission
      setFormData({
        fullName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        country: "",
        highestQualification: "",
        college: "",
        currentAcademicYear: "",
        preferredinternship: "",
        skillLevel: "",
        howDidYouLearnAboutUs: "",
        otherSource: "",
        inquiry: "",
        howGainedSkills: "",
        transactionCode: "",
        paymentName: "",
        terms: false,
      });

      setServerState({ ok: true, msg: "Thanks for your submission! We'll be in touch soon." });
    }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // setErrors(error.response.data.errors);
       
      } else {
        console.error("Error submitting form:", error.message);
        alert(["Ensure all fileds are filled correctly"]);
       
      }
    }
  };

  return (
    <section className="" style={{ background: "#091536" }}>
      <h1 className=" mx-auto md:text-center md:pb-24 header">
        Celestial Crafters bootcamp Program
      </h1>
      <div className="intro">
        <h2 className="text-blue-400">A SUMMER (REMOTE) BOOTCAMP PROGRAM FOR ALL</h2>
        <h3 style={{ fontWeight: "bold" }}>
          This bootcamp offers the following perks:
        </h3>
        <ul className="list">
          <li>
            1.An opportunity to experience a touch of women in Technology, feel
            what it is like to work in a fast-paced youth-led organization and
            gain firsthand insights into the challenges and opportunities within
            the field.
          </li>
          <li>
            2. Work on real-time projects, allowing interns to apply their
            skills and knowledge in real-world settings. The bootcamp program
            also serves as a platform for professional development and skill
            enhancement.
          </li>
          <li>
            3. Networking Opportunities Get to understand how to collaborate,
            work and connect with Celestial Crafters members and interns from
            around the world experiencing a multicultural and rare diverse
            working environment.
          </li>
          <li>
            4. Learning Opportunities As an intern at Celestial Crafters you'll
            dive into a collaborative, intellectually stimulating environment,
            gaining hands-on experience with cutting-edge projects at the
            forefront of technological advancement.
          </li>
          <li>
            5.Job Opportunities For the outstanding candidate per cohort there
            will be an inter-competition to determine their employability. All
            outstanding candidates will be posted on our social media accounts
            for visibility and endorse their LinkedIn account.
          </li>
          <li>6. Get personalized guidance and 24/7 support.</li>
          <li>7. Offer letter from Celestial Crafters.</li>
          <li>
            8. Certificate - A verifiable completion certificate is
            provided after the successful completion of the bootcamp.
          </li>
          <li>
            9. Letter of recommendation - A verifiable recommendation letter is
            provided to top-performing interns based on various assessment
            parameters.
          </li>
        </ul>

        <h1 style={{ color: "red" }}>
          *Limited slots available. Apply before the 29th of September.
        </h1>
      </div>
      <div className="max-w-md mx-auto container-fluid ">
        <form
          onSubmit={handleSubmit}
          className=""
          style={{ fontFamily: "Arial, sans-serif" }}
        >
         
            <label
              htmlFor="fullName"
              className="block  mt-10 text-sm font-medium text-white"
            >
              Full Name:
            </label>
            <input
              className="form-control"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mt-4"
          >
            Email:
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autocomplete="email" 
          />
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-white mt-4"
          >
            Phone Number, including the country code:
          </label>
          <input
            className="form-control"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+2341234567890"
          />
          <label
            htmlFor="country"
            className="block text-sm font-medium text-white mt-4"
          >
            Country:
          </label>
          <input
            className="form-control"
            id="country"
            type="text"
            name="country"
            value={formData.country}
            placeholder="+2341234567820"
            onChange={handleChange}
            autocomplete="country" 
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block w-full p-2 border-gray-300 mt-10 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "black",
            }}
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
          <select
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            className="mt-10 p-2 block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "black",
            }}
          >
            <option value="">Select Highest Academic Qualification</option>
            <option value="high school">High School</option>
            <option value="college/university">College/University</option>
          </select>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mt-4"
          >
            If you entered college/univerity, enter the name of the institution:
          </label>
          <input
            className="form-control"
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mt-4"
          >
            Current Academic Year, e.g 1, 2, 3, 4, 5:
          </label>
          <input
            className="form-control"
            type="text"
            name="currentAcademicYear"
            value={formData.currentAcademicYear}
            onChange={handleChange}
          />
          <select
            name="preferredinternship"
            value={formData.preferredinternship}
            onChange={handleChange}
            style={{ color: "black" }}
            className="mt-10 p-2 block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select Preferred bootcamp Specialization</option>
            <option value="frontend web development">
              Frontend Web Development
            </option>
            <option value="ui/ux design">UI/UX Design</option>
            <option value="product management">Product Management</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="backend web development">
              Backend Web Development
            </option>
            <option value="fullstack web development">
              Fullstack Web Development
            </option>
            <option value="graphic designer">Graphic Designer</option>
            <option value="mobile development">Mobile Development</option>
            <option value="human resource">Human Resource</option>
            <option value="finance">Finance</option>
            <option value="social media manager">Social Media Manager</option>
            <option value="Data Analytics">Data Analytics</option>
            {/* Add more options here */}
          </select>

          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            style={{ color: "black" }}
            className="mt-10 p-2 block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select Skill Level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="expert">Expert</option>
          </select>
          <select
            name="howDidYouLearnAboutUs"
            value={formData.howDidYouLearnAboutUs}
            onChange={handleChange}
            style={{ color: "black" }}
            className="mt-10 p-2 block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">How Did You Learn About Us?</option>
            <option value="social media">Social Media</option>
            <option value="online job portals">Online Job Portals</option>
            <option value="referrals">Referrals</option>
            <option value="other">Other</option>
          </select>
          {formData.howDidYouLearnAboutUs === "other" && (
            <input
              type="text"
              name="otherSource"
              value={formData.otherSource}
              onChange={handleChange}
              placeholder="Specify Other Source"
            />
          )}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mt-10"
          >
            Do you have any question or suggestion?
          </label>
          <textarea
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className="mt-2 p-2 block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
          <div className="payment">
            <p className="mt-8 mb-4">
              A non-refundable fee of 12 USD that will cater for live bootcamp
              coverage with our industry experts twice a week for the period
              long of bootcamps, 24/7 customer support, 2 mentorship sessions
              and networking opportunities.
            </p>
            <p className="" style={{ fontWeight: "bold", fontSize: "32px" }}>
              Payment Options:
            </p>
            <ol>
              <li className="mb-8">
                <div style={{ color: "green", fontSize: "24px" }}>
                  <strong>Mpesa</strong>
                </div>
                <br />
                Pay bill Number - <strong>400200 </strong>
                <br />
                Account Number - <strong>628497</strong> <br />
                Business Name -{" "}
                <span
                  style={{
                    marginTop: "8px",
                    color: "#0D6EFD",
                    fontSize: "18px",
                  }}
                >
                  Celestial Crafters
                </span>
              </li>
              <li>
                <div style={{ color: "green",  fontSize: "24px"}}>
                  <strong>Bank</strong>
                </div>
                <br />
                <strong>Cooperative Bank </strong>
                <br />
                Name -{" "}
                <span style={{ color: "#0D6EFD" }}>CELESTIAL CRAFTERS </span>
                <br />
                Account Number - <strong>01100707184001</strong>
              </li>
            </ol>
            <br />
            <p>
              If you have paid send your name and screenshot of payment to:
              <div className="flex lex-col gap-1">
                {ContactInfo.map((item, index) => {
                  return (
                    <a
                      href={item.page}
                      className="flex gap-2 overflow-x-auto no-scrollbar"
                      target="_blank"
                      rel="noreferrer"
                      key={index + item.info}
                    >
                      <div className="text-blue-700 text-2xl">{item.icon}</div>
                      <span className="text-white group-hover:text-accent duration-500">
                        {item.info}
                      </span>
                    </a>
                  );
                })}
              </div>
            
            </p>
          </div>
          <div className="row form-group ">
            <div className="">
              <label htmlFor="transaction-code">Transaction Code:</label>
            </div>
            <div className="">
              <input
                type="text"
                className="form-control bg-white text-black"
                id="transaction-code"
                name="transactionCode"
                value={formData.transactionCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="">
              <label htmlFor="payment-name">Name used to make payment:</label>
            </div>
            <div className="">
              <input
                type="text"
                className="form-control bg-white text-black"
                id="payment-name"
                name="paymentName"
                value={formData.paymentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <div className={!serverState?.ok ? "errorMsg" : ""}>

<p className="text-green-500">{serverState?.msg}</p>    
  </div>
        </form>

      </div>
    </section>
  );
};

export default Form;
