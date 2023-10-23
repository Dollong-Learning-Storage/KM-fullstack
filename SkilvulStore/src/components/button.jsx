const Button = () => {
  const showAlert = () => {
    alert("Halo dunia");
    console.log("halo");
  };
  return (
    <>
      <button onClick={showAlert}>alert</button>
    </>
  );
};

export default Button;
