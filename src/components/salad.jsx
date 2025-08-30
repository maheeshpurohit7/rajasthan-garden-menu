import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Salad({ onBack }) {
    const salads = menuData.menu.Salad;
    return <CategoryPage title="Salad Menu" items={salads} onBack={onBack} />;
}