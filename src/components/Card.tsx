interface Props {
  cardTitle?: string;
  cardFooter?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
function Card({ children, cardTitle = "", cardFooter, className }: Props) {
  return (
    <div className={className}>
      <div className="flex h-auto flex-col rounded-2xl border border-white/10 bg-white/5 mx-10 mt-3 max-w-[650px] max-h-[450px]">
        {cardTitle && (
          <div className="border-b border-white/50 p-5">
            <h2 className="text-3xl font-semibold text-white">{cardTitle}</h2>
          </div>
        )}

        <div className="flex-1 p-5 overflow-auto text-white">{children}</div>
        {cardFooter && (
          <div className="border-t border-white/10 px-5 py-2">{cardFooter}</div>
        )}
      </div>
    </div>
  );
}

export default Card;
