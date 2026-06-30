type CategoryFilterProps<T extends string> = {
  categories: readonly T[];
  activeCategory: T;
  onChange: (category: T) => void;
};

export function CategoryFilter<T extends string>({ categories, activeCategory, onChange }: CategoryFilterProps<T>) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={active ? 'primary-button px-4 py-2 text-sm' : 'secondary-button px-4 py-2 text-sm'}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
