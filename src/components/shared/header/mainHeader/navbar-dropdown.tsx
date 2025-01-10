// components/Popover.tsx  
import { useState } from 'react';  
import { Popover } from '@/components/ui/popover'; // Adjust this import based on your actual ShadCN UI setup  

const BlurryPopover = () => {  
  const [open, setOpen] = useState(false);  

  return (  
    <div className="relative inline-block">  
      <button onClick={() => setOpen(!open)}>  
        Open Popover  
      </button>  
      
      {open && (  
        <Popover>  
          <div className="absolute z-0 p-4 bg-white rounded-lg shadow-lg"> {/* Popover content */}  
            <p>This is the popover content!</p>  
            <button onClick={() => setOpen(false)}>Close</button>  
          </div>  
        </Popover>  
      )}  

      {open && (  
        <div className="fixed inset-0 bg-black bg-opacity-30 blur-background" onClick={() => setOpen(false)} />  
      )}  
    </div>  
  );  
};  

export default BlurryPopover;