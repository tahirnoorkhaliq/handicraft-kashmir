import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Kani Pashmina Shawls",
      imageUrl: "https://i.ibb.co/0X4y5wZ/kanipash.jpg",
    },
    {
      id: 2,
      title: "Shah Tush",
      imageUrl: "https://i.ibb.co/XtxZDfh/pashmana.jpg",
    },
    {
      id: 3,
      title: "Pashmina",
      imageUrl: "https://i.ibb.co/7Jr37mQ/shahtosh.jpg",
    },
    {
      id: 4,
      title: "Raffal",
      imageUrl: "https://i.ibb.co/ydrSQhX/rafal.jpg",
    },

    {
      id: 5,
      title: "Stole",
      imageUrl: "https://i.ibb.co/JyCSxV7/stall.jpg",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};
export default Directory;
