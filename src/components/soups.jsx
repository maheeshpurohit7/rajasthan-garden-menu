import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Snacks({ onBack }) {
    const snacksItems = menuData.menu.Soups;
    return <CategoryPage title="Soups Menu" items={snacksItems} onBack={onBack} />;
}