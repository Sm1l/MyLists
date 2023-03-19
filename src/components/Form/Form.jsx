//*react
import React from "react";
//*components
import Button from "../Button";
import Input from "../Input";
// import Button2 from "../Button/Button2";
//*animation
import { motion } from "framer-motion";
import { formVariants } from "./animation";
//*scss
import "./form.scss";

const Form = ({ value, setValue, buttonName, placeholder, submitClickHandle, inputRef }) => {
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
    </motion.form>
  );
};

export default Form;
