import React from "react";
import { useCart } from "../Context/CartContext";
import { motion } from "framer-motion";

function AddToast() {
  const { showToast, messege } = useCart();
  return (
    <>
      {showToast ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "fit-content",
              zIndex: "50",
              height: "80px",
              backgroundColor:
                messege === "Congratulations, You Have Added A New Item"
                  ? "#ff5077"
                  : "black",
              display: "flex",
              alignItems: "center",
              padding: "5px 20px",
              borderRadius: "12px",
              position: "fixed",
              bottom: "10%",
              left: "5%",
            }}
          >
            <p style={{ margin: "auto", color: "blue", fontWeight: "500" }}>
              {messege}
            </p>
          </motion.div>
        </>
      ) : null}
    </>
  );
}

export default AddToast;
