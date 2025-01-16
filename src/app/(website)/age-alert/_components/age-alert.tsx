"use client";

// Packages====================
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2

// local impot -------------------------
import { addToSessionStorage } from "@/lib/session-storage";
import Image from "next/image";
import Modal from "@/components/shared/modal/modal";

const AgeAlert = () => {

  const { push } = useRouter();

 

  const handleYes = () => {
    addToSessionStorage("age-restriction", false);
    push("/");
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
          <h3 className="text-center text-[32px] text-[#2A6C2D] font-semibold leading-[38.4px] mt-[25px]">
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
          <div className="flex justify-between">
            <button
              onClick={handleYes}
              className="w-full border-[1px] border-[#2A6C2D] py-[20px] text-base text-white bg-[#2A6C2D] hover:bg-[#266129]/80 rounded-[8px] mt-[36px] duration-300"
            >
              Yes
            </button>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleNo}
              className="w-full border-[1px] border-[#2A6C2D] py-[20px] text-base text-[#2A6C2D] rounded-[8px] hover:border-[#2A6C2D]/80 mt-4 duration-300"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    
    </div>
  );
};

export default AgeAlert;
