const Card = ({ title, emojiId, name }) => {
  return (
    <div className=" w-[300px] bg-white border border-gray-200 rounded-lg shadow">
      <div className="bg-blue-100 py-5 flex justify-center items-center">
        <em-emoji id={emojiId} size="4em" />
      </div>
      <div className="p-3 h-[100px] relative">
        <h5 className="mb-1 text-xl text-center text-gray-900">{title}</h5>
        <p className=" text-xs absolute bottom-3">{name}</p>
      </div>
    </div>
  );
};

export default Card;
