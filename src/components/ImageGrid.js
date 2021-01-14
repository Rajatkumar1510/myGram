import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img src={doc.url} alt="Upload" 
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{delay: 0.8}}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
