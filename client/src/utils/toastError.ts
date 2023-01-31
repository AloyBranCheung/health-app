import { toast } from "react-toastify";

const toastError = (errMsg: string) =>
  toast.error(errMsg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export default toastError;
