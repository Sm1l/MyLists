//*react
import React from "react";
//*components
import Button from "../Button/Button";
import Input from "../Input/Input";
// import Button2 from "../Button/Button2";
//*framer-motion
import { motion } from "framer-motion";
//*scss
import "./form.scss";

const Form = ({ value, setValue, buttonName, placeholder, submitClickHandle, inputRef }) => {
  const formVariants = {
    initial: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0 } },
  };
  return (
    <motion.form
      action=""
      className="form"
      onSubmit={submitClickHandle}
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={formVariants}
    >
      <Input value={value} setValue={setValue} placeholder={placeholder} inputRef={inputRef} />
      <Button name={buttonName} type="submit" value={value} />
      {/* <Button2 name={buttonName} type="submit" value={value} /> */}
    </motion.form>
  );
};

export default Form;
