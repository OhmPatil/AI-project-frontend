function HeadlineCard({ headline, score }) {
  return (
    <div className="bg-[#ff5100] bg-opacity-40 min-h-[125px] h-fit w-[90%] max-w-[1280px] rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-center p-4 gap-2">
      <h1 className="text-lg lg:text-xl font-semibold w-3/4 text-center">{headline}</h1>
      <h2 className="lg:text-lg">Sentiment Score: {score?.toFixed(2)}</h2>
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
