import React from 'react';

function SortButtons() {
  const sortOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'mostLiked', label: '인기순' },
    { value: 'mostComments', label: '댓글많은순' },
  ];
  return (
    <div className="flex gap-4 text-sub-body1">
      {sortOptions.map((option) => (
        <button
          className="text-black10 dark:text-black1">
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SortButtons;
