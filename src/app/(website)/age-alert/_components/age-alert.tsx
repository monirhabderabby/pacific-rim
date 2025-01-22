"use client";

// Packages====================
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2

// local impot -------------------------
import Modal from "@/components/shared/modal/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AgeAlert = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const handleYes = () => {
    const redirectPath = searchParams.get("redirect") || "/"; // Get redirect path or default to "/"
    sessionStorage.setItem("age-restriction", "false"); // Update session storage
    push(redirectPath); // Redirect to the previous path
  };

  const handleNo = () => {
    // Display SweetAlert with error icon and CLOSE button
    Swal.fire({
      icon: "error",
      title: "You are not allowed",
      text: "You must be 18+ years to enter this site.",
      confirmButtonText: "CLOSE",
      confirmButtonColor: "green", // Green background for the close button
      backdrop: true, // Enable backdrop for the SweetAlert
      allowOutsideClick: false, // Disable closing when clicking outside
      position: "center", // Ensures alert stays centered
      width: "60%",
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        backgroundImage: `url(/assets/img/alert.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat", // Ensure seamless background
        animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Modal>
        <div>
          <div className="mx-auto mt-6 w-[160px] md:w-[205px] h-[160px] md:h-[205px] relative">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-center text-[28px] md:text-[36.53px] text-[#333333] font-bold leading-[33.6px] md:leading-[43.84px] mt-2">
            PACIFIC RIM FUSION
          </h2>
          <h3 className="text-center text-[32px] text-[#152764] font-semibold leading-[38.4px] mt-[25px]">
            Are you 21 years or older
          </h3>
          <p className="text-center text-[22px] text-[#102011] font-normal leading-[26.4px] mt-4">
            We need this information for legal stuff
          </p>
          <div className=" flex justify-center">
            <p className="text-center text-[22px] text-[#102011] font-normal leading-[26.4px] w-[295px] mx-auto">
              You must be 21+ years to enter this site.
            </p>
          </div>
          <div className="flex justify-center mt-[35px]">
            <Button onClick={handleYes} className="w-[396px] h-[56px] bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] text-white hover:bg-[#121D42]">
              Yes
            </Button>
          </div>
          <div className="flex justify-center mt-[14px]">
            <Button onClick={handleNo} variant="outline" className="w-[396px] h-[56px] text-[#121D42] border border-[#121D42]">
              No
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AgeAlert;
