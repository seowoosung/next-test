import { message } from "antd";
import { MessageInstance } from "antd/es/message/interface";
import React, { createContext, PropsWithChildren } from "react";

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={{ messageApi }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const MessageContext = createContext({
  messageApi: null as unknown as MessageInstance,
});
