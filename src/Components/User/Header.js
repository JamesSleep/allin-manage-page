import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  margin: 5px 0px;
  padding: 5px 0px 10px 0px;
  align-items: center;
`;

const ColumnName = styled.li`
  width: ${props => props.width}px;
  color: gray;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  align-items: center;
`;

export default () => (
  <Container>
    <ColumnName width={90} center={true}>프로필</ColumnName>
    <ColumnName width={80}>이름</ColumnName>
    <ColumnName width={140}>휴대폰</ColumnName>
    <ColumnName width={150}>Email</ColumnName>
    <ColumnName width={100}>기능</ColumnName>
  </Container>
)