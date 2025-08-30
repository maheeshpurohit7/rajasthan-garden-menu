import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function IceCream({ onBack }) {
    const iceCreamItems = menuData.menu["Ice Cream"];
    return <CategoryPage title="Ice Cream Menu" items={iceCreamItems} onBack={onBack} />;
}