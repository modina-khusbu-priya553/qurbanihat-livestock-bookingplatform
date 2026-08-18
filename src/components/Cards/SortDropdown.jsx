"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SortDropdown = ({ currentSort }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/allAnimals?${params.toString()}`);
  };

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={currentSort || ""}
      onChange={handleSortChange}
    >
      <option value="">Sort by Price</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;