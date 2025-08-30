import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function Punjabi({ onBack }) {
    const punjabiItems = menuData.menu.Punjabi;
    return <CategoryPage title="Punjabi Menu" items={punjabiItems} onBack={onBack} />;
}