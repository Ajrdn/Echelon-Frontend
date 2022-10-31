import styled from "styled-components";

export const ChatPageContainer = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;
  max-width: 25rem;
  min-width: 10rem;
  width: 60%;
  background-color: #eee;
`;

export const ChatContainer = styled.div`
  display: flex;
`;

export const ChatInput = styled.input`
  padding: 1rem;
  width: 80%;
`;

export const ChatSendButton = styled.button`
  padding: 1rem;
  width: 20%;
`;

export const SystemChatContainer = styled(ChatContainer)``;

export const MyChatContainer = styled(ChatContainer)`
  justify-content: flex-end;
`;

export const Chat = styled.span`
  padding: 0.5rem;
`;

export const MyChat = styled(Chat)`
  background-color: #00aaff;
`;

export const SystemChat = styled(Chat)`
  background-color: #fff;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  margin-top: 0.3rem;
`;
