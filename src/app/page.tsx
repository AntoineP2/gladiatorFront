"use client";
import PlantSheet from "../components/PlantSheet";
import axios from "axios";
import React from "react";

type Card = {
  id: number;
  name: string;
  img: string;
};

export default function Home() {
  // ---- HOOK et CONST ----
  const [dataCard, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // ---- FONCTION  ------
  React.useEffect(() => {
    const fetchDataCard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3005/plant/getAllSpecies"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    setLoading(true);
    fetchDataCard();
    setLoading(false);
  }, []);

  React.useEffect(() => {
    console.log(dataCard);
  }, [dataCard]);
  // ---- RENDER ------
  return (
    <main>
      {loading && <p>Chargement...</p>}
      {!loading && (
        <div className="grid grid-cols-5 gap-3 mt-5 mb-5">
          {dataCard.map((card: Card) => (
            <PlantSheet key={card.id} card={card} />
          ))}
        </div>
      )}
    </main>
  );
}
