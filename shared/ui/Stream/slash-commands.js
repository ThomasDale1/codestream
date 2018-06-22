export default [
	{ id: "help", help: "get help" },
	{ id: "add", help: "add member to channel", description: "@user" },
	// { id: "apply", help: "apply patch last post" },
	{ id: "archive", help: "archive channel", channelOnly: true },
	// { id: "diff", help: "diff last post" },
	{ id: "invite", help: "add to your team", description: "email" },
	{ id: "leave", help: "leave channel", channelOnly: true },
	{ id: "me", help: "emote" },
	{ id: "msg", help: "message member", description: "@user" },
	{ id: "mute", help: "mute channel" },
	// { id: "muteall", help: "mute codestream" },
	// { id: "open", help: "open channel" },
	// { id: "prefs", help: "open preferences" },
	{ id: "rename", help: "rename channel", description: "newname", channelOnly: true },
	{ id: "remove", help: "remove from channel", description: "@user", channelOnly: true },
	{ id: "version", help: "" },
	{ id: "who", help: "show channel members" }
];
