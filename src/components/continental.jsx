import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Continental({ onBack }) {
    const continentalItems = menuData.menu.Continental;
    return <CategoryPage title="Continental Menu" items={continentalItems} onBack={onBack} />;
}