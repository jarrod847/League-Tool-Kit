import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

const LoadingSpinner: React.FC = () => {
  return (
    <div>
      <div>
        <Spin indicator={antIcon} delay={3000} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
