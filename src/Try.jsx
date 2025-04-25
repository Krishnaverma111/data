import { motion } from "framer-motion";

const PopOutCard = () => {
  return (
    <motion.div
      initial={{ scale: 2, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 1000, damping: 20 }}
      className="p-6 bg-white rounded-6xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold">Pop Out!</h2>
      <p>This card animates when it appears.</p>
    </motion.div>
  );
};

export default PopOutCard;