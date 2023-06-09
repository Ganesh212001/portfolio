import { useState } from "react";
import { motion } from 'framer-motion';
import { Col } from "react-bootstrap"
import BottomLine from "../components/atoms/BottomLine/index";

const Contact = () => {

    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
  
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      let response = await fetch("https://portfolio-gri1.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ succes: true, message: 'Message sent successfully'});
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
    };

  return (
    <div className="flex justify-center flex-col items-center h-screen -mt-10 bg-[#000b18]">
       <h1 className="text-4xl font-semibold drop-shadow-md text-center text-[#00E8F8]">
           
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}>Contact <span className="text-primary">Us</span>
          </motion.div>
          </h1>
          <BottomLine />
        <form onSubmit={handleSubmit} className='w-96'>
          <div className="mb-4 mt-14 space-y-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.firstName}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18]"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              autoCorrect="off"
              placeholder='First Name'
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div className='direction-reverse'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}>
          <input value={formDetails.lasttName}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18]"
              type="text"
              id="mobile"
              name="mobile"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Last Name'
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.email}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18]"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Email'
              onChange={(e) => onFormUpdate('email', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.phone}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18]"
              id="phone"
              name="phone"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Phone No.'
              onChange={(e) => onFormUpdate('phone', e.target.value)}
            ></input>
            </motion.div>
          </div><br />
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <textarea value={formDetails.message}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18]"
              id="message"
              name="message"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Write Your Message Here...'
              onChange={(e) => onFormUpdate('message', e.target.value)}
            ></textarea>
            </motion.div>
          </div><br />
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}>
                <button className="primary-button mx-auto">
                  <span>{buttonText}</span>
                </button>
              </motion.div>
            </div>
                    {
                      status.message &&
                      <Col className="mx-auto mt-4">
                        <p className={status.success === false ? "danger text-red-600" : "success text-green-600"}>{status.message}</p>
                      </Col>
                    }
           </div>
        </form>
    </div>
  );
};

export default Contact;