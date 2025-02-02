import Shopheader from "@/components/shopheader";
import Arlist from "@/components/arlist";
import Feseli from "@/components/feseli";
import Shopcard from "@/components/shopcard";

export default async function Shop() {
  return (
    <div>
    <Shopheader/>
    <Arlist/>
    <Shopcard/>
    <Feseli/>
    </div>
  );
}
