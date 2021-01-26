import React, { useEffect, useState } from "react";
import { userApi } from "../../api";
import UserPresenter from "./UserPresenter";

export default () => {
  const [data, setData] = useState({
    result: null,
    loading: false,
    error: null
  });

  useEffect(() => {
    getApiCallback();
  }, []);

  const getApiCallback = async () => {
    const {
      data: {
        data: result
      }
    } = await userApi.getUser();
    setData({ ...data, result });
  }

  return (
    <UserPresenter
      result={data.result}
      error={data.error}
      loading={data.loading}
    />
  )
}