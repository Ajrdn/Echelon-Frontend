import React, { SetStateAction } from "react";
import type { NextPage } from "next";
import {
  ChatInput,
  ChatInputContainer,
  ChatPageContainer,
  ChatSendButton,
  MyChat,
  MyChatContainer,
  SystemChat,
  SystemChatContainer,
} from "./chat.style";
import { onChange } from "../../function";

const Chat: NextPage = () => {
  const [questions, setQuestions] = React.useState<string[]>([
    "회사 이름",
    "회사 연락처",
    "회사 이메일",
    "회사가 필요한 돈",
    "작성이 완료되었습니다",
  ]);

  const [answers, setAnswers] = React.useState<string[]>([]);
  const [element, setElement] = React.useState<string>("");
  const [step, setStep] = React.useState<number>(1);

  const append = (
    element: string,
    setState: React.Dispatch<SetStateAction<string[]>>,
    setStep: React.Dispatch<SetStateAction<number>>
  ) => {
    setState((prev) => [...prev, element]);
    setStep((prev) => (prev <= 4 ? prev + 1 : prev));
  };

  return (
    <ChatPageContainer>
      {new Array(step).fill(null).map((data, idx) => {
        return (
          <>
            <SystemChatContainer>
              <SystemChat>{questions[idx]}</SystemChat>
            </SystemChatContainer>
            {answers[idx] ? (
              <MyChatContainer>
                <MyChat>{answers[idx]}</MyChat>
              </MyChatContainer>
            ) : (
              <></>
            )}
          </>
        );
      })}

      {answers.length < 4 ? (
        <ChatInputContainer>
          <ChatInput
            type={`text`}
            onChange={(event) => {
              onChange(event.target.value, setElement);
            }}
          />
          <ChatSendButton
            onClick={() => {
              append(element, setAnswers, setStep);
            }}
          >
            전송
          </ChatSendButton>
        </ChatInputContainer>
      ) : (
        <></>
      )}
    </ChatPageContainer>
  );
};
export default Chat;
