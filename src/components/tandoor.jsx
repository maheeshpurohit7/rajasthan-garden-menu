import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Chinese({ onBack }) {
    const chineseItems = menuData.menu.Tandoor;
    return <CategoryPage title="Tandoor Menu" items={chineseItems} onBack={onBack} />;
}