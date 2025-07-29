import { MessageSender } from "@/lib/сonstants";

export interface Message {
  id: number;
  text: string;
  sender: MessageSender;
}
