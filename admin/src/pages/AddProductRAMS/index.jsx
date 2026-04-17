import SingleInputForm from "../../components/Common/SingleInputForm";

const AddProductRAMS = () => {
  const handleSubmit = (data) => {
    console.log("RAM Data:", data);
  };

  return (
    <SingleInputForm
      title="Add Product RAMS"
      fieldLabel="PRODUCT RAM"
      fieldName="productRAM"
      placeholder="Enter RAM"
      onSubmit={handleSubmit}
    />
  );
};

export default AddProductRAMS;