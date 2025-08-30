import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Continental({ onBack }) {
    const chineseItems = menuData.menu.Chinese;
    return <CategoryPage title="Chinese Menu" items={chineseItems} onBack={onBack} />;
}