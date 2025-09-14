import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Success toast
const showSuccess = (message) => {
  toast.success(message);
};

// Error toast
const showError = (message) => {
  toast.error(message);
};

// Optional: Info and Warning toasts
const showInfo = (message) => {
  toast.info(message);
};

const showWarning = (message) => {
  toast.warning(message);
};

export { showSuccess, showError, showInfo, showWarning };
