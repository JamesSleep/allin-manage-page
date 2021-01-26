import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserItem from "../../Components/User/UserItem";
import Header from "../../Components/User/Header";

const UserContainer = styled.div`
  padding: 20px 15px;
`;

const HeaderColumn = styled.div``;

const HeaderTitle = styled.div`
  color: #2980b9;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  background-color: white;
  width: 700px;
  box-shadow: 0px 1px 1px 3px rgba(240, 240, 240, 0.8);
  border-radius: 5px;
  padding: 10px 15px;
`;

const List = styled.ul``;

const Item = styled.li`
  color: black;
`;

const UserPresenter = ({ result, error, loading }) =>
  loading ? null : (
    <UserContainer>
      <HeaderColumn>
        <HeaderTitle>일반회원</HeaderTitle>
      </HeaderColumn>
      <InfoBox>
        <Header />
        <List>
          {result && result.map(item => (
            <Item key={item.mb_index}>
              <UserItem info={item} />
            </Item>
          ))}
        </List>
      </InfoBox>
    </UserContainer>
  );

UserPresenter.propTypes = {
  result: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default UserPresenter;