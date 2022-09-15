import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

const Test = () => {
  const Icon = styled(UpCircleOutlined)`
    font-size: 50px;
    color: red;
    cursor: pointer;
  `;

  const RateIcon = styled(Rate)`
    display: flex;
    font-size: 40px;
  `;
  const [star, setStar] = useState(0);
  const starOnChange = (value: number) => {
    setStar(value);
    //     alert(event);
  };

  return (
    <>
      <Icon />
      <RateIcon value={star} onChange={starOnChange} />
    </>
  );
};

export default Test;
