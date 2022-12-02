import { Link } from "react-router-dom";

const FileAComplaint = () => {
  return (
    <>
      <p style={{ fontSize: "20px" }}>File a complaint</p>
      <Link to="/complaint/form" style={{ fontSize: "20px" }}>
        Complaint form
      </Link>
    </>
  );
};

export default FileAComplaint;
