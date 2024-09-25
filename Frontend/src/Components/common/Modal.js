import { motion } from "framer-motion";
const Modal = ({ children, showModal }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={
        showModal ? { display: "flex", opacity: 1 } : { opcaity: 0, scale: 0 }
      }
      transition={{ duration: 0.3 }}
      className="absolute z-50 right-0 top-1 sm:top-7"
    >
      {children}
    </motion.section>
  );
};

export default Modal;
