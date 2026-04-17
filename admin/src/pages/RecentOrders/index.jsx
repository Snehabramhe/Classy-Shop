import { useState } from "react";
import DataTable from "../../components/Common/DataTable";
import Pagination from "../../components/Common/Pagination";
import TextInput from "../../components/Common/UI/TextInput";
import { IoSearch } from "react-icons/io5";

const RecentOrders = () => {
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
        "",
        "",
        "Order Id",
        "Paymant Id	",
        "Name",
        "Phone Number",
        "Address",
        "Pincode",
        "Total Amount",
        "Email",
        "User Id",
        "Order Status",
        "Date",
        "Action"
    ];

    return (
        <div containerClass="min-h-screen bg-gray-100 p-4">
            <DataTable
                columns={columns}
                data={data}
                headClass="bg-gray-700 text-white text-sm"
                renderRow={(item) => (
                    <tr key={item.id} className="border-t border-gray-200">
                       
                    </tr>
                )}

                filters={
                    <div className="grid grid-cols-2 justify-between items-center gap-4">

                        <h2 className="text-xl font-semibold">Recent Orders</h2>

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

export default RecentOrders;