import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Chinese({ onBack }) {
    const chineseItems = menuData.menu.RiceChinese;
    return <CategoryPage title="Rice Chinese Menu" items={chineseItems} onBack={onBack} />;
}