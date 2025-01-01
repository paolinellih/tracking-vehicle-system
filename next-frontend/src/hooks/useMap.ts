import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import { Map } from "../utils/map";
import { getCurrentPosition } from "./geolocation";

export function useMap(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    (async () => {
      if (!containerRef.current) return; // Check for null
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        libraries: ["routes", "geometry", "marker"],
      });
      const [, , , position] = await Promise.all([
        loader.importLibrary("routes"),
        loader.importLibrary("geometry"),
        loader.importLibrary("marker"),
        getCurrentPosition({ enableHighAccuracy: true }),
      ]);
      const map = new Map(containerRef.current, {
        mapId: "b77acf942645ad4a", // Theme
        zoom: 15,
        center: position,
      });
      setMap(map);
    })();
  }, [containerRef]);

  return map;
}
