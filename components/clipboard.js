import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
            toast.error(err);
        });
    }
    return (
      <div className="grid place-items-center my-3">
        <input type="text" className="hidden text-center" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button onClick={handleCopyClick}>
          <span className="text-white font-semibold border-2 rounded-lg p-1 grid place-items-center hover:text-green-700 hover:border-green-700">{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
        <Toaster
         position="top-right"
         reverseOrder={false}
         />
      </div>
    );
  }