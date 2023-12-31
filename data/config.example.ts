export const config = {
  responses: {
    noPermission: "You do not have permission to use this command.",
    genericError:
      "Something went wrong. Hopefully the developer adds in extra info!",
    botMissingPermissionSEND_MESSAGES:
      "Missing Permissions! Please grant the bot the `SEND_MESSAGES` permission or reinvite the bot with the correct permissions.",
    botMissingPermissionEMBED_LINKS:
      "Missing Permissions! Please grant the bot the `EMBED_LINKS` permission or reinvite the bot with the correct permissions",
    botHasAdmin:
      "Woah! The server admins are treading a dangerous road, I have admin! If my token gets leaked I could cause havoc! Please ask server admins to remove my administrator permissions.\n\nI will also send a message to the log channel if there is one available.",
  },
  discord: {
    token: "",
    clientId: "",
    botPrefix:
      "" /** String of the prefix used to trigger the bot. Pinging the bot is a WIP at the moment. */,
    serverId: "",
    logChannel: "",
    staffRole: "",
    botOwners: [
      "",
    ] /** Array of all bot owners. Set index0 as the main owner/server owner, basically the person you want people to contact when it breaks. */,
    messageCommandsEnabled:
      false /** Toggle for message commands. Set to false by default for what should be obvious reasons. Read the DDev docs if you want more info on why. */,
    shardCount: 1, //make sure to use only a plain number, doing "1" will just crash it. also "auto" doesn't work for some reason
    /** Discord Permissions Int */
    permsInt: "607448176",
  },
  mongo: {
    connectionUri: "",
  },
  statcord: {
    apiKey: "",
  },
  tsabLoggerSetting: {
    /** File path of desired log file. Defaults to data/tsab.log if not specified or valid */
    logFilePath: "",
    /** Discord Webhook for sending logs to */
    loggingWebhook: "",
  },
  tsabApi: {
    /** Port that the API will run on. Defaulted to 3000 */
    apiPort: 3000,
    /** Domain the API will be accessed through. Used for callbacks and such. Default of localhost */
    domain: "localhost",
    /** Authentication key used to validate requests to protected endpoints. */
    auth: "CHANGEME!",
  },
}
