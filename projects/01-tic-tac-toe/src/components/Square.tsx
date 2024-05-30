function Square({
  children,
  updateBoard,
  isSelected,
  index,
}: {
  children: React.ReactNode;
  updateBoard?: (index: number) => void;
  index?: number;
  isSelected?: boolean;
}) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (!updateBoard || index === undefined) return;
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}

export default Square;
