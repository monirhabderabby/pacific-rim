// Packages
import Image from "next/image";

// Local imports
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface AdminApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminApprovalModal({
  isOpen,
  onClose,
}: AdminApprovalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="relative">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-no-repeat bg-center bg-cover opacity-10" />

          <div className="relative p-6 flex flex-col items-center">
            {/* Logo */}
            <Image
              src="/assets/img/logo.png"
              alt="Pacific Rim Fusion Logo"
              width={100}
              height={100}
              className="mb-4"
            />

            {/* Text content */}
            <DialogTitle className="text-2xl font-bold mb-2">
              PACIFIC RIM FUSION
            </DialogTitle>
            <p className="text-gradient text-xl mb-2">
              Kindly Wait for Admin Approval.
            </p>
            <p className="text-gray-600 mb-6">Keep shopping with Rim Fusion.</p>

            {/* Button */}
            <Button onClick={onClose} className=" px-12 py-2 rounded">
              Okay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
