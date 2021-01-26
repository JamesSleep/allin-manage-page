import React from "react";
import styled from "styled-components";
import { imagePathFormat } from "../../Util/imageUrlFormat";
import { BsPhone, BsPen, BsTrash } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  color: #273c75;
  font-size: 15px;
  margin: 5px 0px;
  border-top: 1px #f1f2f6 solid;
  padding: 5px 0px;
`;

const ImageBox = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

const Name = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
`;

const Moblie = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
`;

const Email = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Operation = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
`;

export default ({ info }) => (
  <Container>
    <ImageBox>
      <Image src={imagePathFormat(info.profile)} />
    </ImageBox>
    <Name>{info.user_name}</Name>
    <Moblie>{phone(info.phone_number)}</Moblie>
    <Email>{info.email}</Email>
    <Operation>
      <BsPhone /><BsPen /><BsTrash />
    </Operation>
  </Container>
)

const phone = (text = "") =>
  `${text.slice(0, 3)} ${text.slice(3, 7)} ${text.slice(7, 11)}`;