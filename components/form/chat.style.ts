import styled from "styled-components";

export const ChatPageContainer = styled.div`
  max-width: 25rem;
  min-width: 10rem;
  margin: 2rem;
  width: 60%;
  background-color: #eee;
  border: 1px solid black;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ChatContainer = styled.div`
  display: flex;
`;

export const ChatInput = styled.input`
  padding: 1rem;
  box-sizing: border-box;
  width: 68%;
`;

export const ChatSendButton = styled.button`
  padding: 1rem;
  width: 30%;
`;

export const SystemChatContainer = styled(ChatContainer)``;

export const MyChatContainer = styled(ChatContainer)`
  justify-content: flex-end;
`;

export const Chat = styled.span`
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

export const MyChat = styled(Chat)`
  background-color: #00aaff;
`;

export const SystemChat = styled(Chat)`
  background-color: #fff;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
