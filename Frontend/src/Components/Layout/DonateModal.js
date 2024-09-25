import React, { useState } from "react";
import { motion } from "framer-motion";

const DonateModal = ({ showModal, setShowModal }) => {
  const [step, setStep] = useState(1);
  const [donationType, setDonationType] = useState("one-time");
  const [donationAmount, setDonationAmount] = useState(5);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardCvvChange = (e) => {
    setCardCvv(e.target.value);
  };

  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.target.value);
  };

  const completePayment = () => {
    // Simulate completing payment (you can add your actual payment logic here)
    setShowModal(false);
  };

  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
  };

  // const handleAmountChange = (e) => {
  //   setDonationAmount(parseInt(e.target.value));
  // };

  // const handleCustomAmountChange = (e) => {
  //   setCustomAmount(e.target.value);
  // };
  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={
        showModal ? { display: "flex", opacity: 1 } : { opacity: 0, scale: 0 }
      }
      transition={{ duration: 0.3 }}
      className="absolute z-50 flex justify-center items-center mt-10 mx-auto w-full  "
    >
      <div className="bg-opacity-50 backdrop-filter backdrop-blur-2xl bg-black relative rounded-lg py-5 !px-5 shadow-xl md:!px-10 text-white w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] ">
        <button
          onClick={() => setShowModal(false)}
          className="w-10 h-10  z-50 text-white  border flex justify-center absolute right-10 top-5 hover:scale-105 items-center ml-3 rounded-full cursor-pointer bg-[rgba(65,47,123,0.15)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M13.354 3.354a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M3.354 3.354a.5.5 0 0 0 0 .708l10 10a.5.5 0 0 0 .708-.708l-10-10a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center ">
          <div className="flex text-2xl sm:text-4xl justify-center text-center w-full py-7">
            <h2 className="pb-2 border-right uppercase text-center">
              Make a <span className="de uppercase">Donation</span>
            </h2>
          </div>
          {step === 1 && (
            <div className="flex flex-col gap-3  w-full">
              <p className="text-center">
                Your contribution play a vital role supporting our vision.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between p-1 bg-blue-700 rounded-lg  mx-auto">
                  <label className="py-2 px-4 " htmlFor="one-time">
                    <input
                      type="radio"
                      id="one-time"
                      value="one-time"
                      checked={donationType === "one-time"}
                      className="mr-2"
                      onChange={handleDonationTypeChange}
                    />
                    One Time
                  </label>
                  <label htmlFor="monthly" className="py-2 px-4 rounded-tr-lg rounded-br-lg bg-black" >
                    <input
                      type="radio"
                      id="monthly"
                      value="monthly"
                      className="mr-2"
                      checked={donationType === "monthly"}
                      onChange={handleDonationTypeChange}
                    />
                    Monthly
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6 flex-wrap justify-center">
                    {[5, 10, 15, 20, 25].map((amount) => (
                      <div key={amount} className="flex gap-2 ">
                        <input
                          type="checkbox"
                          value={amount}
                          className="mr-2]"
                          checked={donationAmount === amount}
                          onChange={() => handleDonationAmountChange(amount)}
                        />
                        <label>${amount}</label>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center justify-center flex-col sm:flex-row">
                    <label>Enter Custom Amount </label>
                    <input
                      type="number"
                      className="bg-transparent border-[2px] rounded-md !border-blue-700 outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center sm:flex-row w-full gap-4 ">
                  <button
                    className="text-white flex-1 text-sm font-semibold py-3 px-2 bg-transparent border !border-blue-700 rounded-md flex justify-center "
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white text-sm flex-1 font-semibold py-3 px-2 bg-blue-700 rounded-md flex justify-center "
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-3  w-full mx-auto lg:w-[70%] ">
              <h2 className="capitalize mb-4">Add your bank card details</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex  flex-col gap-4 justify-between w-full">
                    <div className="flex flex-col gap-3 ">
                      <label>Your Bank Card Number</label>
                      <input
                        type="text"
                        className="bg-[#FFFFFF1A] rounded-sm outline-none"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label>Name on Card</label>
                      <input
                        type="text"
                        value={cardCvv}
                        onChange={handleCardCvvChange}
                        className="bg-[#FFFFFF1A] rounded-sm  outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 flex-col">
                    <div className="flex flex-col gap-3">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        value={cardName}
                        className="bg-[#FFFFFF1A] rounded-sm  outline-none"
                        onChange={handleCardNameChange}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label>CVV</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={handleCardExpiryChange}
                        className="bg-[#FFFFFF1A] rounded-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-3">
                  <button
                    className="text-white flex-1 text-sm font-semibold py-3 px-2 bg-transparent border !border-blue-700 rounded-md flex justify-center "
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    className="text-white text-sm flex-1 font-semibold py-3 px-2 bg-blue-700 rounded-md flex justify-center "
                    onClick={completePayment}
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default DonateModal;
