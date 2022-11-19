import React from "react";
import FormWrapper from "./formModal.styles";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Please input your name"),
  userID: yup.string().required("Please input your Id"),
  email: yup.string().email().required("please input your email"),
  message: yup.string().required("Kindly enter your message"),
});

const FormModal = ({ toggleModal, modalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitForm = (data) => {
    alert("Your Message Successfully Sent!")
    navigate("/", data);
  };

  return (
    <>
      {modalOpen && (
        <FormWrapper>
          <div className="modal-wrapper">
            <header className="modal-top">
              <h1>Report Here</h1>
              <div onClick={toggleModal}>
                <IoMdClose />
              </div>
            </header>
            <form action="" onSubmit={handleSubmit(submitForm)}>
              <div className="form-container">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  />
                  <p>{errors.name?.message}</p>
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div>
                  <input
                    id="userID"
                    type="text"
                    placeholder="User id With Us"
                    {...register("userID", { required: true })}
                  />
                  <p>{errors.userID?.message}</p>
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    {...register("message", { required: true })}
                    cols="30"
                    rows="10"
                    placeholder="Write Your Help Subject..."
                  ></textarea>
                  <p>{errors.message?.message}</p>
                </div>

                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </FormWrapper>
      )}
    </>
  );
};

export default FormModal;
