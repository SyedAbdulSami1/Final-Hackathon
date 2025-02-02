import Shopheader from "@/components/shopheader";
import Arlist from "@/components/arlist";
import Feseli from "@/components/feseli";
import Shopcard from "@/components/shopcard";

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
