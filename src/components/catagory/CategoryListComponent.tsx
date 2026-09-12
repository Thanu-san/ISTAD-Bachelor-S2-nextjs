'use client'
import { use } from "react"
import CategoryComponent, { CategoryInter } from "./CategoryComponent"

export default function CategoryListComponent({
  category
}: {
  category: Promise<CategoryInter[]>
}) {
  const categories = use(category);
  return (
    <div>
      {categories.map(({ name, image, id }) => (
        <CategoryComponent
          key={id}
          name={name}
          image={image}
          id={id}
        />
      ))}
    </div>
  )
}
