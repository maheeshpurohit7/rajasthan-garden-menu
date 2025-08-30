import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Raita({ onBack }) {
    const raitas = menuData.menu.Raita;
    return <CategoryPage title="Raita Menu" items={raitas} onBack={onBack} />;
}