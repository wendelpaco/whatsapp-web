export type ClientType = {
  WPP_ID: string,
  WPP_PLATFORM: string,
  WPP_PUSHNAME: string,
  WPP_PICTURE: string,
  WPP_CONNECTED: number
}

export type ContactType = {
  WPP_ID: string,
  WPP_ISGROUP: number,
  WPP_NAME: string,
  WPP_PUSHNAME: string,
  WPP_PICTURE: string,
}

export type MessageType = {
  WPP_CLIENT_ID: string,
  WPP_CONTACT_ID: string,
  WPP_ID: string,
  WPP_TIMESTAMP: number,
  WPP_ISGROUP: number,
  WPP_FROM: string,
  WPP_TO: string,
  WPP_BODY: string,
  WPP_ISEDITED: number,
  WPP_REPLY_ID: string,
  WPP_DELETED: number,
  REACTION_WPP_FROM: string,
  REACTION_WPP_REACTION: string,
  REACTION_WPP_ISEDITED: string,
  WPP_PICTURE: string
}
