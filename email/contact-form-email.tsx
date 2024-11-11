import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderName: string;
  senderEmail: string;
  senderAddress: string;
  subject: string;
};

export default function ContactFormEmail({
  message,
  senderName,
  senderEmail,
  senderAddress,
  subject,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-y rounded-md">
              <Heading className="leading-tight">
                Message from BalandaBros: {subject}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The senders email is: {senderName}</Text>
              <Text>The senders email is: {senderEmail}</Text>
              <Text>The senders email is: {senderAddress}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
