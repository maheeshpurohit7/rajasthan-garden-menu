import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Starters({ onBack }) {
    const starters = menuData.menu.Starters;
    return <CategoryPage title="Starters Menu" items={starters} onBack={onBack} />;
}