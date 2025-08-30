import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function HotColdDrink({ onBack }) {
    const drinkItems = menuData.menu.HotColdDrink;
    return <CategoryPage title="Hot & Cold Drinks Menu" items={drinkItems} onBack={onBack} />;
}