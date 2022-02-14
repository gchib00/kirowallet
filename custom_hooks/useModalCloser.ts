import { useEffect } from 'react';

interface Props {
  ref: React.RefObject<any>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
//reusable custom hook responsible for closing a modal once user clicks outside the modal div
const useModalCloser = ({ ref, setModalState }: Props) => {
  useEffect(() => {
    const handler = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        setModalState(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => { //cleanup fn
      document.removeEventListener('mousedown', handler);
    };
  });
  return {
    
  };
};

export default useModalCloser;