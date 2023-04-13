import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

interface MyProps {
  categories: { id: Number; title: String; imageUrl: String }[];
}

const Directory = ({ categories }: MyProps) => {
  return (
    <div className="directory-container">
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
