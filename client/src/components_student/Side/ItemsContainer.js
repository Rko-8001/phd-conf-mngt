import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, CONTACT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="QUICK FINDS" />
      <Item Links={RESOURCES} title="USEFULL LINKS" />
      <Item Links={COMPANY} title="OTHER LINKS" />
      <Item Links={CONTACT} title="CONTACT DETAILS" />
    </div>
  );
};

export default ItemsContainer;