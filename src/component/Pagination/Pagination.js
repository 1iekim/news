import "./Pagination-module.scss";

const Pagination = ({ data, handler, select, setSelect }) => {
  const limit = data.limit;
  const found = data.found;

  const arrCount = Array.from(
    { length: Math.ceil(found / limit) },
    (_, i) => i + 1
  );

  console.log(select);

  const clickPrev = () => {
    setSelect(select - 1);
    handler(select - 1);
  };

  const clickNext = () => {
    setSelect(select + 1);
    handler(select + 1);
  };

  return (
    <div className="pagination">
      {select !== 1 ? (
        <button className="pagination__btn" onClick={() => clickPrev()}>
          Prev
        </button>
      ) : (
        <></>
      )}
      <span className="pagination__text">{select}</span>
      {select !== arrCount[arrCount.length - 1] ? (
        <button className="pagination__btn" onClick={() => clickNext()}>
          Next
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
