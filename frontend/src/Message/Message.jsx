import { toast } from 'react-hot-toast';

const Message = (type, message, toastId = null, icon = null) => {
  const options = icon ? { icon } : {};

  switch (type) {
    case 'success':
      if (toastId) {
        toast.success(message, { id: toastId, ...options });
      } else {
        toast.success(message, options);
      }
      break;

    case 'error':
      if (toastId) {
        toast.error(message, { id: toastId, ...options });
      } else {
        toast.error(message, options);
      }
      break;

    case 'loading':
      return toast.loading(message, options);

    default:
      toast(message, options);
      break;
  }
};

export default Message;
