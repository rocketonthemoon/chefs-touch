function Item({ item }) {
  return (
    <div className="sm:inline-block m-2 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 object-center w-full object-cover md:h-full md:w-48"
            src={item.image}
            alt="Picture of food"
          />
        </div>
        <div className="p-5 flex flex-col justify-around">
          <div className="uppercase tracking-wide m-2 text-sm w-48 text-black-500 font-semibold">
            {item.title}
          </div>
         <button className="btn w-64 bg-primary text-white border-none">Try It</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
