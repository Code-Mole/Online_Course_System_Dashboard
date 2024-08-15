import React, { useState } from "react";
import "./Cards.css";
import { motion, AnimatePresence } from "framer-motion";
import ConpactCard from "./ConpactCard";
import ExpandedCard from "./ExpandedCard";


function Card(props) {
  const [expended, setExpanded] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: -100 }, // Initial state
    visible: { opacity: 1, y: 0 }, // Animate to this state
  };
  return (
    <AnimatePresence>
      <motion.div
        key="my-element" // Key is essential for AnimatePresence
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {expended ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <ConpactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}




export default Card;
