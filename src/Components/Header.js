import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 20px 10px;
  background-color: #3498db;
  box-shadow: 0px 1px 5px 2px rgba(80, 120, 200, 0.8);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  margin: 10px 0px;
  align-items: center;
  text-align: center;
  border-left: 3px solid 
    ${props => props.current ? "#ecf0f1" : "transparent"};
  transition: border-left 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
  font-size: 15px;
  color: #ecf0f1;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">일반회원</SLink>
      </Item>
      <Item current={pathname === "/Company"}>
        <SLink to="/Company">업체회원</SLink>
      </Item>
      <Item current={pathname === "/Story"}>
        <SLink to="/Story">스토리</SLink>
      </Item>
    </List>
  </Header>
)); 