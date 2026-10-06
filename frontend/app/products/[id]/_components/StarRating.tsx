const StarRating = ({ rating, max = 5 }: { rating: number; max?: number }) => {
  const filled = Math.round(rating);
  return (
    <span
      aria-label={`${rating} out of ${max} stars`}
      className="tracking-[0.12em] text-muted"
    >
      {"★".repeat(filled)}
      <span className="opacity-30">{"★".repeat(max - filled)}</span>
    </span>
  );
};

export default StarRating;
