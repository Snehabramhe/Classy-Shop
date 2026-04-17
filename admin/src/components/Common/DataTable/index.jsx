const DataTable = ({
  title,
  buttonText,
  columns = [],
  data = [],
  renderRow,
  onButtonClick,
  filters,
  children,
  headClass = "bg-gray-200 text-sm text-gray-700",
  containerClass = "" 
}) => {
  return (
    <div className={`rounded-lg ${containerClass}`}>

      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h2 className="text-xl font-semibold">{title}</h2>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-2xl">

        {/* ✅ FILTER SECTION (dynamic) */}
        {filters && (
          <div className="p-4 bg-white">
            {filters}
          </div>
        )}

        {/* Table */}
        <table className="w-full overflow-x-auto">
          <thead className={headClass}>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="p-3 text-left">{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, i) => renderRow(item, i))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-75 text-center">
                  <div className="flex justify-center items-center h-full">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default DataTable;