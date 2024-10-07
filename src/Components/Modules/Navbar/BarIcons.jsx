import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const BarIcons = ({ isBar, setIsBar }) => {
  return (
    <div className="nb-wrapper-icon hidden">
      <motion.div
        className="z-50"
        initial={{ rotateZ: "-90deg", opacity: 0 }}
        animate={{
          rotateZ: isBar ? "0deg" : "-90deg",
          opacity: isBar ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ display: isBar ? "block" : "none" }}
      >
        <RxCross2 size={"28px"} onClick={() => setIsBar(false)} />
      </motion.div>
      <motion.div
        initial={{ rotateZ: "0deg", opacity: 1 }}
        animate={{
          rotateZ: isBar ? "90deg" : "0deg",
          opacity: isBar ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ display: isBar ? "none" : "block" }}
      >
        <LuMenu
          className="nb-icon-bar"
          size={"28px"}
          onClick={() => setIsBar(true)}
        />
      </motion.div>
    </div>
  );
};

export default BarIcons;
