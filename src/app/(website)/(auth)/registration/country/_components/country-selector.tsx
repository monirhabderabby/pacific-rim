// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import { addNewBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the countries you want to include
const countries = {
  US: "United States",
  CA: "Canada",
  MX: "Mexico",
  DE: "Germany",
  ES: "Spain",
  TH: "Thailand",
};

const disabledColor = "#808080"; // Gray color for disabled countries
const colorScale = ["#C8EEFF", "#0071A4", "#008000"]; // Green for selected countries

function CountrySelector() {
  const [loading, setLoading] = useState<true | false>(false);
  const [regionColors, setRegionColors] = useState({
    US: 100, // Green for United States
    CA: 100, // Green for Canada
    MX: 100, // Green for Mexico
    DE: 100, // Green for Germany
    ES: 100, // Green for Spain
    TH: 100, // Green for Thailand
  });

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [mapPaths, setMapPaths] = useState(null);
  const authState = useAppSelector((state) => state.auth);

  const businesses = authState.businesses;

  // check if prev form value not found
  const { profession } = authState;

  // if prev state value not found then start from first

  if (profession.length == 0) {
    redirect("/registration");
  }

  // Dynamically set the map paths after the component has mounted
  useEffect(() => {
    if (worldMill && worldMill.paths) {
      setMapPaths(worldMill.paths);
    }
  }, []);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  function handleRegionClick(event, code) {
    // If the country is not in the list, prevent interaction by returning early
    if (!countries[code]) {
      return; // Disable the click interaction
    }

    const countryName = countries[code] || "Unknown Country";

    // Update the clicked region's color (for visual feedback)
    setRegionColors((prevColors) => ({
      ...prevColors,
      [code]: 50, // Color changed to show interaction (can be adjusted)
    }));

    setLoading(true);

    dispatch(
      addNewBusiness([
        ...businesses,
        {
          country: countryName,
          province: "",
          businessLicense: "",
          resellerLicense: "",
        },
      ])
    );

    const redirectUrl =
      countryName === "United States" || countryName === "Canada"
        ? `/registration/country/${countryName}`
        : `/registration/country/${countryName}/business_information`;

    router.push(redirectUrl);
  }

  function handleRegionTipShow(event, label, code) {
    const countryName = countries[code] || "Unknown Country";
    label.html(`
      <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 150px; color: white; padding: 10px;">
        <p><b>${countryName}</b></p>
      </div>
    `);
  }

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      style={{
        margin: "auto",
        width: "100%",
        height: "600px",
        position: "relative",
      }}
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              zIndex: 100, // Ensure it layers on top of the map
            }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <Loader2 className="animate-spin h-5 w-5 z-50 text-white " />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#DBDDDF"
        series={{
          regions: [
            {
              scale: colorScale, // Color scale for countries
              values: {
                // Check if mapPaths is available
                ...(mapPaths
                  ? Object.keys(mapPaths).reduce((acc, key) => {
                      // If the country code is in the `countries` list, set color to green
                      if (countries[key]) {
                        acc[key] = 100; // Green for selected countries
                      } else {
                        acc[key] = disabledColor; // Gray for disabled countries
                      }
                      return acc;
                    }, {})
                  : {}),
                ...regionColors, // Override the enabled countries' colors (green for selected)
              },
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={handleRegionTipShow}
        onRegionClick={handleRegionClick}
      />
    </motion.div>
  );
}

export default CountrySelector;
