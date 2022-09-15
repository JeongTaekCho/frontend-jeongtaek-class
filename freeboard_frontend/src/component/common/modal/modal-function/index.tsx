import { Modal } from "antd";

// success modal
export const successModal = (successmsg: string) => {
  Modal.success({
    content: successmsg,
  });
};

// error modal
export const errorModal = (errormsg: string) => {
  Modal.error({
    content: errormsg,
  });
};
