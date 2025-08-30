import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Snacks({ onBack }) {
    const snacksItems = menuData.menu.Snacks;
    return <CategoryPage title="Snacks Menu" items={snacksItems} onBack={onBack} />;
}