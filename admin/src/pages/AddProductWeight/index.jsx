import SingleInputForm from "../../components/Common/SingleInputForm";

const AddProductWeight = () => {
  const handleSubmit = (data) => {
    console.log("RAM Data:", data);
  };

  return (
    <SingleInputForm
      title="Add Product WEIGHT"
      fieldLabel="PRODUCT WEIGHT"
      fieldName="productWEIGHT"
      placeholder="Enter WEIGHT"
      onSubmit={handleSubmit}
    />
  );
};

export default AddProductWeight;