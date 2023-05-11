function HeadlineCard({ headline, score }) {
  return (
    <div className="bg-black min-h-[125px] h-fit w-[90%] border-2 border-white rounded-xl flex justify-between items-center p-4 gap-2">
      <div className="text-lg font-semibold w-2/3">{headline}</div>
      <div>Sentiment Score: {score?.toFixed(2)}</div>
      <div className="text-5xl">
        {/* {score >= 2 && "😀"}
        {score <= -2 && score > -4 && "☹️"}
        {score == -1 || score == 1 && "😐"}
        {score == 0 && "😐"}
        {score <= -4 && "💀"} */}

        {score > -0.2 && score < 0.2 && "😐"}
        {score >= 0.2 && "😀"}
        {score <= -0.2 && "☹️"}
      </div>
    </div>
  );
}

export default HeadlineCard;
