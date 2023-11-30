import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ClientType, ContactType, MessageType } from '../types';


const api: AxiosInstance  = axios.create({
  baseURL: 'http://192.168.0.138:9996',
  headers: {
    'Content-Type': 'application/json',
    'npstoken': '6ELLJUHdWRhGY8NCHj4y3gvThMEHnNp84VugenCKgcYVre7jGhfpJ8zN7uYDTSRZ'
  },
});

export const service = {
  async getClients(clientConnected?: boolean): Promise<ClientType[]> {
    try {
      const clients: AxiosResponse<ClientType[]> = await api.post('/client', { WPP_CONNECTED: clientConnected });
      return clients.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async getContacts(clientId: string, isGroup?: number): Promise<ContactType[]> {
    try {
      const contacts : AxiosResponse<ContactType[]> = await api.post('/contact', { 'WPP_CLIENT_ID': clientId, 'WPP_ISGROUP': isGroup });
      return contacts.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async getMessages(clientId: string, contactId: string): Promise<MessageType[]> {
    try {
      const messages: AxiosResponse<MessageType[]> = await api.post('/message', { 'WPP_CLIENT_ID': clientId, 'WPP_CONTACT_ID': contactId });
      return messages.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async getMessageHistory(messageId: string): Promise<MessageType[]> {
    try {
      const messageHistories: AxiosResponse<MessageType[]> = await api.post('/message/history', { 'WPP_ID': messageId });
      return messageHistories.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async getMessageReaction(messageId?: string): Promise<MessageType[]> {
    try {
      const messageReaction: AxiosResponse<MessageType[]> = await api.post('/message/reaction', { 'WPP_MESSAGE_ID': messageId });
      return messageReaction.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};
