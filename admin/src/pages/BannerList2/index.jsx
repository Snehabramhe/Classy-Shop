import React, { useState } from "react";
import DataTable from "../../components/Common/DataTable";
import Pagination from "../../components/Common/Pagination";
import { useNavigate } from "react-router-dom";

const BannerList2 = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const data = []; // your API data

  return (
    <DataTable
      title="Banners List 2"
      buttonText="ADD BANNER"
      columns={["IMAGE", "ACTION"]}
      data={data}
      onButtonClick={() => navigate("/add-banner-2")}
      renderRow={(item, index) => (
        <tr key={index} className="border-t">
          <td className="p-3">
            <img src={item.image} alt="" className="w-20 h-12 object-cover rounded" />
          </td>
          <td className="p-3">Edit | Delete</td>
        </tr>
      )}
    >
      <Pagination
        page={page}
        total={10}
        rowsPerPage={rowsPerPage}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
        onNext={() => setPage((p) => p + 1)}
        onRowsChange={(val) => setRowsPerPage(Number(val))}
      />
    </DataTable>
  );
};

export default BannerList2;