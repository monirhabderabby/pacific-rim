"use client";

// Packages====================
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

// local impot -------------------------
import { Button } from "@/components/ui/button";
import { addToSessionStorage } from "@/lib/session-storage";
import Image from "next/image";

const AgeAlert = () => {
  const [showModal, setShowModal] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setShowModal(true); // Trigger animation when component mounts
  }, []);

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
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "550px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          paddingBottom: "50px",
          position: "relative",
          overflow: "hidden",
          opacity: showModal ? 1 : 0,
          animation: showModal ? "fadeIn 1.5s ease-out" : "",
        }}
      >
        <Image
          src="/assets/img/logo.png"
          alt="Logo"
          style={{
            width: "205px",
            height: "205px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
          width={100}
          height={100}
        />
        <h1 className="text-[36px] font-bold leading-[43.64px] text-[#333333]">
          PACIFIC RIM FUSION
        </h1>
        <p className="text-[32px] font-semibold leading-[38.4px] text-center text-[#2A6C2D]">
          Are you 18 years or older?
        </p>
        <p
          style={{
            fontSize: "22px",
            color: "#102011",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          We need this information for legal stuff.
          <br />
          You Must be 21+ years for <br />
          enter this site.
        </p>
        <div className="space-y-[30px] w-full max-w-[396px]">
          <Button onClick={handleYes} className="w-full">
            YES
          </Button>
          <Button onClick={handleNo} variant="outline" className="w-full">
            NO
          </Button>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%; /* Ends at this position */
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @media only screen and (max-width: 768px) {
            div > div {
              max-width: 90%;
              max-height: 90%;
              padding: 20px;
            }

            h1 {
              font-size: 28px;
            }

            p {
              font-size: 18px;
            }

            button {
              font-size: 14px;
              padding: 8px 20px;
            }
          }

          @media only screen and (max-width: 480px) {
            div > div {
              max-width: 95%;
              max-height: 90%;
              padding: 15px;
            }

            h1 {
              font-size: 24px;
            }

            p {
              font-size: 16px;
            }

            button {
              font-size: 12px;
              padding: 8px 15px;
            }

            img {
              width: 80px;
              height: 80px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AgeAlert;
