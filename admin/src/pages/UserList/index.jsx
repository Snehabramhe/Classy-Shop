import React, { useState } from "react";
import DataTable from "../../components/Common/DataTable";
import Pagination from "../../components/Common/Pagination";
import TextInput from "../../components/Common/UI/TextInput";
import { IoSearch } from "react-icons/io5";

const UserList = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [selectedRows, setSelectedRows] = useState([]);

    const [filters, setFilters] = useState({
        category: "",
        subCategory: "",
        thirdCategory: "",
        search: "",
    });

    const options = [
        { label: "Clothes", value: "clothes" },
        { label: "Electronics", value: "electronics" },
    ];

    const data = [
        { id: 1, name: "Shirt", category: "Clothes", price: 100 },
        { id: 2, name: "Laptop", category: "Electronics", price: 500 },
    ];

    const isAllSelected = selectedRows.length === data.length;

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((item) => item.id));
        }
    };

    const handleRowSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((i) => i !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const columns = [
        <input
            type="checkbox"
            className="w-4 h-4 accent-blue-600 cursor-pointer"
            checked={isAllSelected}
            onChange={handleSelectAll}
        />,
        "USER",
        "USER PHONE NO",
        "CREATED",
        "ACTION",
    ];

    return (
        <div className="bg-gray-100 min-h-screen">

            <DataTable
                columns={columns}
                data={data}
                renderRow={(item) => (
                    <tr key={item.id} className="border-t border-gray-200">
                        <td className="p-3">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-blue-600 cursor-pointer"
                                checked={selectedRows.includes(item.id)}
                                onChange={() => handleRowSelect(item.id)}
                            />
                        </td>

                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.category}</td>
                        <td className="p-3">-</td>
                        <td className="p-3">₹{item.price}</td>
                    </tr>
                )}

                filters={
                    <div className="grid grid-cols-2 justify-between items-center gap-4">

                        <h2 className="text-xl font-semibold">Users List</h2>

                        <div className="flex items-end">
                            <TextInput
                                placeholder="Search here..."
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({ ...filters, search: e.target.value })
                                }
                                icon={<IoSearch size={20} />}

                            />

                        </div>
                    </div>
                }
            >
                {/* Pagination */}
                <Pagination
                    page={page}
                    total={0}
                    rowsPerPage={rowsPerPage}
                    onPrev={() => setPage((p) => Math.max(p - 1, 1))}
                    onNext={() => setPage((p) => p + 1)}
                    onRowsChange={(val) => setRowsPerPage(Number(val))}
                />
            </DataTable>
        </div>
    );
};

export default UserList;