import SingleInputForm from "../../components/Common/SingleInputForm";

const AddProductSize = () => {
  const handleSubmit = (data) => {
    console.log("RAM Data:", data);
  };

  return (
    <SingleInputForm
      title="Add Product SIZE"
      fieldLabel="PRODUCT SIZE"
      fieldName="productSIZE"
      placeholder="Enter SIZE"
      onSubmit={handleSubmit}
    />
  );
};

export default AddProductSize;