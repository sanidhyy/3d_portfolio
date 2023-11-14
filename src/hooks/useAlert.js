import { useState } from "react";

// alert hook
const useAlert = () => {
  // initial alert state
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  // show alert
  const showAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  // hide alert
  const hideAlert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
