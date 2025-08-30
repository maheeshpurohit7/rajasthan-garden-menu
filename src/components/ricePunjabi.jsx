import menuData from "./assets/menu.json";
import CategoryPage from "./CategoryPage";

export default function RicePunjabi({ onBack }) {
    const ricePunjabiItems = menuData.menu.RicePunjabi;
    return <CategoryPage title="Rice Punjabi Menu" items={ricePunjabiItems} onBack={onBack} />;
}