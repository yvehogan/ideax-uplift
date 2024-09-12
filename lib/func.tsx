import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const copyToClipboard = async (
  text: string
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Acct number copied to clipboard', {
      style: {
        backgroundColor: '#002D54',
        color: '#fff',
      },
      icon: <FaCheckCircle style={{ color: '#fff' }} />,
      autoClose: 300,
      hideProgressBar: true,
    });
    return true;
  } catch (err) {
    console.error('Failed to copy text to clipboard:', err);
    return false;
  }
};
