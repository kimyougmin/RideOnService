import React from 'react';

interface PopularTagsProps {
  tags: string[];
}
function PopularTags({tags}: PopularTagsProps) {
  return (
    <div className="flex flex-col gap-4 border border-black4 rounded-lg px-4 py-3">
      <h3 className="text-body1 font-bold dark:text-black3">인기 태그</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-body2 bg-black2 text-black10 px-4 py-1 rounded dark:bg-black7 dark:text-black1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PopularTags;
