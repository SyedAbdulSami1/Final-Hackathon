"use client";
import Arlist from "../components/arlist";
import Feseli from "../components/feseli";
import Shopcard from "../components/shopcard";
import Shopheader from "../components/shopheader";


export default async function Shop() {
  const allCards = await Shopcard()
  return (
    <>
    <Shopheader/>
    <Arlist/>
    {allCards}
    <Feseli/>
    </>
  );
}
