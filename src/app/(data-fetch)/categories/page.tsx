import CategoryListComponent from "@/components/catagory/CategoryListComponent";

export default function CategoryPage() {
  const category = 
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((data) => data.json())
      .then(category => {
        console.log(category);
        return category;
      });

  return (
    <div>
      <CategoryListComponent category={category} />
    </div>
  )
}
