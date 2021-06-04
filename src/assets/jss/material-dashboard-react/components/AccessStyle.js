const AccessStyle = {
  root: {
    display: "flex",
    justifyContent: "center",
    // background: "rgb(19,64,152)",
    background:
      "linear-gradient(28deg, rgba(19,64,152,1) 0%, rgba(0,255,136,1) 100%)",
    width: "100vw",
    height: "100vh",
  },
  messageArea: {
    position: "absolute",
    bottom: "20%",
    display: "flex",
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadious: "10px",
  },
  container: {
    position: "absolute",
    top: "20%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: "50px",
    height: "180px",
    borderRadius: "20px",
  },
  input: {
    marginBottom: "15px",
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
  },
  text: {
    fontWeight: "bold",
  },
};

export default AccessStyle;
