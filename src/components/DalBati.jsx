import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Continental({ onBack }) {
    const dalBatiItems = menuData.menu.DalBati;
    return <CategoryPage title="Dal Bati Menu" items={dalBatiItems} onBack={onBack} />;
}