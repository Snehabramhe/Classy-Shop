import React, { useState } from "react";
import DataTable from "../../components/Common/DataTable";
import Pagination from "../../components/Common/Pagination";
import CustomSelect from "../../components/Common/UI/CustomSelect";
import TextInput from "../../components/Common/UI/TextInput";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [selectedRows, setSelectedRows] = useState([]);
    const navigate = useNavigate();

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
        "PRODUCT",
        "CATEGORY",
        "SUB CATEGORY",
        "PRICE",
        "SALES",
        "STOCK",
        "RATING",
        "ACTION",
    ];

    return (
        <div containerClass="min-h-screen bg-gray-100 p-4">

            <DataTable
                title="Products"
                buttonText="ADD PRODUCT"
                onButtonClick={() => navigate("/add-product")}
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
                        <td className="p-3">0</td>
                        <td className="p-3">In Stock</td>
                        <td className="p-3">⭐</td>
                        <td className="p-3">Edit</td>

                    </tr>
                )}

                filters={
                    <div className="grid grid-cols-4 gap-4">

                        <CustomSelect
                            label="Category By"
                            options={options}
                            value={filters.category}
                            onChange={(val) =>
                                setFilters({ ...filters, category: val })
                            }
                        />

                        <CustomSelect
                            label="Sub Category By"
                            options={options}
                            value={filters.subCategory}
                            onChange={(val) =>
                                setFilters({ ...filters, subCategory: val })
                            }
                        />

                        <CustomSelect
                            label="Third Level Sub Category By"
                            options={options}
                            value={filters.thirdCategory}
                            onChange={(val) =>
                                setFilters({ ...filters, thirdCategory: val })
                            }
                        />

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

export default ProductList;