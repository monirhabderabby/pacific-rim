"use client";

// Packages====================
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2


// local impot -------------------------
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
          height: "100%",
          maxWidth: "500px",
          maxHeight: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
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
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
          width={100}
          height={100}
        />
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
            padding: "2px",
          }}
        >
          PACIFIC RIM FUSION
        </h1>
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "green",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Are you 18 years or older?
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#555",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          We need this information for legal purposes.
          <br /> You must be 18+ years to enter this site.
        </p>
        <button
          onClick={handleYes}
          style={{
            padding: "10px 30px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginBottom: "30px",
          }}
        >
          YES
        </button>
        <button
          onClick={handleNo}
          style={{
            padding: "10px 30px",
            backgroundColor: "white",
            color: "#b91c1c",
            border: "2px solid red",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          NO
        </button>
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
